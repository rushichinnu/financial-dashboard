"use client";
import { useState } from "react";
import { Download, Loader2 } from "lucide-react";

export default function SimplePDFExport() {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);

    try {
      // Dynamic import to avoid SSR issues
      const jsPDF = (await import("jspdf")).default;
      const html2canvas = (await import("html2canvas")).default;

      console.log("Starting PDF generation..."); // Debug log

      // Get the dashboard content
      const element = document.getElementById("dashboard-content");

      if (!element) {
        console.error("Dashboard content element not found");
        alert(
          "Dashboard content not found. Make sure the page is fully loaded."
        );
        return;
      }

      console.log("Element found, generating canvas..."); // Debug log

      // Generate canvas from HTML
      const canvas = await html2canvas(element, {
        scale: 1,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: true, // Enable logging for debugging
        height: element.scrollHeight,
        width: element.scrollWidth,
      });

      console.log("Canvas generated, creating PDF..."); // Debug log

      // Create PDF
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // Calculate dimensions to fit A4
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight) * 0.95;

      const centerX = (pdfWidth - imgWidth * ratio) / 2;

      // Add image to PDF
      pdf.addImage(
        imgData,
        "PNG",
        centerX,
        10,
        imgWidth * ratio,
        imgHeight * ratio
      );

      // Generate filename with current date
      const filename = `wealth-elite-dashboard-${
        new Date().toISOString().split("T")[0]
      }.pdf`;

      console.log("Saving PDF..."); // Debug log

      // Save the PDF - this should trigger download
      pdf.save(filename);

      console.log("PDF saved successfully!"); // Debug log
    } catch (error) {
      console.error("PDF generation error:", error);
      alert(`Error generating PDF: ${error.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={generatePDF}
      disabled={isGenerating}
      className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Generating PDF...</span>
        </>
      ) : (
        <>
          <Download className="w-4 h-4" />
          <span>Export PDF </span>
        </>
      )}
    </button>
  );
}
