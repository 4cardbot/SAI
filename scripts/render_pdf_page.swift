import AppKit
import PDFKit

guard CommandLine.arguments.count == 4 else {
    fputs("usage: render_pdf_page input.pdf page_number output.png\n", stderr)
    exit(2)
}

let input = CommandLine.arguments[1]
let pageNumber = Int(CommandLine.arguments[2]) ?? 1
let output = CommandLine.arguments[3]

guard let document = PDFDocument(url: URL(fileURLWithPath: input)),
      let page = document.page(at: pageNumber - 1) else {
    fputs("Unable to open page\n", stderr)
    exit(1)
}

let bounds = page.bounds(for: .mediaBox)
let scale: CGFloat = 2.0
let width = Int(ceil(bounds.width * scale))
let height = Int(ceil(bounds.height * scale))
guard let bitmap = NSBitmapImageRep(
    bitmapDataPlanes: nil,
    pixelsWide: width,
    pixelsHigh: height,
    bitsPerSample: 8,
    samplesPerPixel: 4,
    hasAlpha: true,
    isPlanar: false,
    colorSpaceName: .deviceRGB,
    bitmapFormat: [],
    bytesPerRow: 0,
    bitsPerPixel: 0
) else {
    fputs("Unable to create bitmap\n", stderr)
    exit(1)
}

guard let context = NSGraphicsContext(bitmapImageRep: bitmap) else {
    fputs("Unable to create graphics context\n", stderr)
    exit(1)
}

NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = context
context.cgContext.setFillColor(NSColor.white.cgColor)
context.cgContext.fill(CGRect(x: 0, y: 0, width: width, height: height))
context.cgContext.scaleBy(x: scale, y: scale)
page.draw(with: .mediaBox, to: context.cgContext)
NSGraphicsContext.restoreGraphicsState()

guard let data = bitmap.representation(using: .png, properties: [:]) else {
    fputs("Unable to encode PNG\n", stderr)
    exit(1)
}
try! data.write(to: URL(fileURLWithPath: output))
