import AppKit
import CoreGraphics

guard CommandLine.arguments.count >= 3 else {
    fputs("usage: images_to_pdf output.pdf image1.png [image2.png ...]\n", stderr)
    exit(2)
}

let output = CommandLine.arguments[1]
let imagePaths = Array(CommandLine.arguments.dropFirst(2))
var firstPage = true
var context: CGContext?

for path in imagePaths {
    guard let image = NSImage(contentsOfFile: path),
          var proposed = Optional(CGRect(origin: .zero, size: image.size)),
          let cgImage = image.cgImage(forProposedRect: &proposed, context: nil, hints: nil) else {
        fputs("Unable to load image: \(path)\n", stderr)
        exit(1)
    }

    let aspect = CGFloat(cgImage.width) / CGFloat(cgImage.height)
    let pageSize: CGSize = aspect > 1.25 ? CGSize(width: 792, height: 612) : CGSize(width: 612, height: 792)
    var mediaBox = CGRect(origin: .zero, size: pageSize)

    if firstPage {
        context = CGContext(URL(fileURLWithPath: output) as CFURL, mediaBox: &mediaBox, nil)
        firstPage = false
    }
    guard let pdf = context else { exit(1) }
    pdf.beginPDFPage(nil)

    let margin: CGFloat = 24
    let available = CGRect(x: margin, y: margin, width: pageSize.width - 2 * margin, height: pageSize.height - 2 * margin)
    let scale = min(available.width / CGFloat(cgImage.width), available.height / CGFloat(cgImage.height))
    let drawSize = CGSize(width: CGFloat(cgImage.width) * scale, height: CGFloat(cgImage.height) * scale)
    let drawRect = CGRect(x: available.midX - drawSize.width / 2, y: available.midY - drawSize.height / 2, width: drawSize.width, height: drawSize.height)
    pdf.interpolationQuality = .high
    pdf.draw(cgImage, in: drawRect)
    pdf.endPDFPage()
}

context?.closePDF()
