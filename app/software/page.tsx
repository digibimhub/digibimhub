import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const addons = [
  { name: 'MEP Connector Tool', features: ['Auto-connect pipes', 'Smart junctions', 'Coordination'], revit: '2022-2025' },
  { name: 'Clash Detector', features: ['Real-time detection', 'Auto reports', 'Warnings'], revit: '2022-2025' },
  { name: 'Schedule Exporter', features: ['Export to Excel', 'Custom filters', 'Batch process'], revit: '2022-2025' },
  { name: 'Model Organizer', features: ['Auto-organize', 'Naming conventions', 'Bulk updates'], revit: '2022-2025' },
  { name: 'View Generator', features: ['Auto-create views', 'Custom sets', 'Sheet automation'], revit: '2022-2025' },
  { name: 'Annotation Tool', features: ['Smart annotations', 'Dimensions', 'Formatting'], revit: '2022-2025' },
  { name: 'Family Manager', features: ['Organize families', 'Batch editor', 'Type catalogs'], revit: '2022-2025' },
  { name: 'Report Generator', features: ['PDF reports', 'Templates', 'Bulk generation'], revit: '2022-2025' },
]

export default function Software() {
  return (
    <>
      <Navbar />
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Revit Add-ons for Windows</h1>
            <p className="text-xl text-gray-600">Professional tools to boost your productivity</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {addons.map((addon, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-3">{addon.name}</h3>
                <ul className="space-y-2 mb-4 text-sm text-gray-700">
                  {addon.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
                <p className="text-xs text-gray-600 mb-4">Revit {addon.revit}</p>
                <div className="flex gap-2">
                  <button className="flex-1 btn-primary text-sm py-2">DOWNLOAD</button>
                  <button className="flex-1 btn-secondary text-sm py-2">DEMO</button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-brand-50 p-12 rounded-lg text-center">
            <h2 className="heading-sm mb-4">Custom Development</h2>
            <p className="text-gray-700 mb-6">We develop custom Revit add-ons for your specific needs</p>
            <button className="btn-primary">REQUEST CUSTOM DEVELOPMENT</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
