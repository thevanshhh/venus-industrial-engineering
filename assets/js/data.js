/**
 * Venus Industrial Engineering — Master Data Model
 * Ahmedabad, Gujarat, India
 */

export const COMPANY = {
  name: "Venus Industrial Engineering",
  tagline: "Manufacturer & Engineering Works",
  established: 2008,
  yearsInOperation: "18+",
  proprietor: "Management Team & Works Director",
  gst: "24AAACG1092F1ZK",
  phoneDisplay: "+91 76229 99901",
  phoneRaw: "+917622999901",
  waNumber: "917622999901",
  email: "contact@venusindustrialeng.in",
  address: "70, Pushpak Ind. Estate, Nika Tube Cross Rd, G.I, D.C, Phase I, Vatva, Ahmedabad, Gujarat 382445, India",
  addressShort: "Ahmedabad, Gujarat",
  coordinates: "23.0225° N, 72.5714° E",
  businessType: "Manufacturer · Supplier · Industrial Services",
  teamSize: "20+",
  compliance: "ISO 9001:2015 Compliant Industrial Facility",
  heroImage: "assets/img/01.jpg",
  aboutImage: "assets/img/05.jpg"
};

export const CATALOG = [
  {
    "id": "venus-industrial-engineering-cnc-machined-parts",
    "code": "MFG-01",
    "name": "Precision CNC Turning & VMC Milling Components",
    "category": "Precision Machining",
    "spec": "High-tolerance machined components for automotive, industrial machinery, hydraulics, and engineering assemblies.",
    "specsList": [
      {
        "label": "Machining Tolerance",
        "val": "\u00b1 0.005 mm (5 Microns)"
      },
      {
        "label": "Envelope Capacity",
        "val": "Dia 10 mm to 450 mm \u00d7 1000 mm Length"
      },
      {
        "label": "Material Grades",
        "val": "SS 304/316, EN8/19/24 Alloy Steel, Brass"
      },
      {
        "label": "Quality Inspection",
        "val": "3D CMM Verified with Mill Test TC"
      }
    ],
    "price": "\u20b995,000",
    "priceUnit": "/ batch"
  },
  {
    "id": "venus-industrial-engineering-jigs-dies-fixtures",
    "code": "MFG-02",
    "name": "Industrial Production Jigs, Fixtures & Progressive Dies",
    "category": "Tool & Die",
    "spec": "Engineered production tooling, precision clamping fixtures, and progressive stamping dies built for high-volume cycles.",
    "specsList": [
      {
        "label": "Die Steel Grades",
        "val": "D2, D3, H13 Vacuum Hardened (HRC 58-62)"
      },
      {
        "label": "Machining Method",
        "val": "Wire EDM, 4-Axis VMC & Surface Grinding"
      },
      {
        "label": "Tool Life Expectancy",
        "val": "1,000,000+ Cycles Certified"
      },
      {
        "label": "Repeatability",
        "val": "< 0.003 mm Clamping Consistency"
      }
    ],
    "price": "\u20b91,45,000",
    "priceUnit": "/ set"
  },
  {
    "id": "venus-industrial-engineering-machinery-spares",
    "code": "MFG-03",
    "name": "Custom Industrial Machinery Shafts, Gears & Assemblies",
    "category": "Industrial Spares",
    "spec": "Precision spline shafts, ground spur/helical gears, couplings, and mechanical assemblies built to OEM specifications.",
    "specsList": [
      {
        "label": "Heat Treatment",
        "val": "Case Carburizing / Induction Hardened"
      },
      {
        "label": "Surface Finish",
        "val": "Ra 0.4 \u00b5m Cylindrical Ground"
      },
      {
        "label": "Dynamic Balancing",
        "val": "ISO 1940 G1.0 Specification"
      },
      {
        "label": "Quality Traceability",
        "val": "100% Material Test & Heat Code Reports"
      }
    ],
    "price": "\u20b948,000",
    "priceUnit": "/ lot"
  }
];

export function getWhatsAppInquiryUrl(machine, customMessage = "") {
  let text = "";
  if (machine) {
    const priceText = machine.price ? ` (listed at ${machine.price})` : "";
    text = `Hello ${COMPANY.name}, I am interested in the ${machine.name}${priceText}. Please share technical catalog and commercial quotation.`;
  } else if (customMessage) {
    text = customMessage;
  } else {
    text = `Hello ${COMPANY.name}, I would like to request an RFQ quotation for your industrial product range.`;
  }
  return `https://wa.me/${COMPANY.waNumber}?text=${encodeURIComponent(text)}`;
}
