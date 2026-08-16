import React from 'react';
import { 
  Sun, CheckCircle, Calculator, FileText, 
  HelpCircle, BookOpen, ChevronRight 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTAButton from '../components/CTAButton';

const Subsidy = () => {
  return (
    <div className="bg-slate-50/50">
      
      {/* Page Header */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-90" />
        <div className="absolute top-[-100%] right-[-20%] w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-secondary block mb-2 font-mono">
            Government Facilitation
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Government Solar Subsidy
          </h1>
          <p className="mt-3 text-sm md:text-base text-emerald-100/80 max-w-2xl">
            Save up to 40% on installation costs with clean solar schemes enabled under the national PM Surya Ghar program.
          </p>
        </div>
      </section>

      {/* Main Subsidy Details */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <SectionHeading 
              overline="Save More with Us" 
              title="Save More with SLV Solar Solutions!" 
              subtitle="The Government of India actively promotes solar energy adoption by offering attractive subsidies under various schemes. At SLV Solar Solutions, we help you take full advantage of these benefits, making your switch to solar power more affordable and rewarding!"
              align="left"
            />
            
            <p className="text-sm text-slate-550 leading-relaxed">
              We coordinate the application, structural clearance inspections, and final net-metering enablement. This ensures your subsidy clearance flows without long municipal processing delays.
            </p>

            {/* Scheme Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-sm">
              <span className="text-[10px] uppercase font-extrabold text-secondary tracking-widest block mb-2">Prime Minister Scheme</span>
              <h3 className="text-lg font-bold text-primary mb-3">PM Surya Ghar: Muft Bijli Yojana</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Under this national scheme program, homeowners can avail up to 40% subsidy on solar installations up to 3 kW capacity and 20% subsidy on systems between 4 kW and 10 kW.
              </p>
              <div className="space-y-2 border-t border-slate-50 pt-4">
                <span className="text-[10px] uppercase font-extrabold text-primary tracking-wider block mb-1">Residential Sizing Criteria:</span>
                <div className="flex items-start space-x-2 text-xs text-slate-600">
                  <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Must be a residential homeowner with suitable clear roof space</span>
                </div>
                <div className="flex items-start space-x-2 text-xs text-slate-600">
                  <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Solar system must be installed by an approved vendors network</span>
                </div>
                <div className="flex items-start space-x-2 text-xs text-slate-600">
                  <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Net metering must be enabled for proper grid-connectivity feedbacks</span>
                </div>
              </div>
            </div>

            {/* Commercial depreciations */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-105 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-3">Commercial & Industrial Benefits</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Industries, businesses, and public institutions can benefit from corporate tax incentives, accelerated depreciation (up to 40%), and reduced operating bills.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-600">
                <div className="flex items-center space-x-1">
                  <span className="text-primary font-bold">✓</span>
                  <span>Accelerated Depreciation (40%)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-primary font-bold">✓</span>
                  <span>MNRE Sourced Modules</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-primary font-bold">✓</span>
                  <span>State Utility Net Metering Incentives</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Checklist Box */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Beneficiary checks */}
            <div className="bg-primary text-white rounded-3xl p-8 shadow-md">
              <span className="text-[10px] uppercase font-extrabold text-secondary tracking-widest block mb-2 font-mono">Process Checklist</span>
              <h3 className="text-xl font-bold mb-6">How Subsidy Filing Works</h3>
              
              <div className="space-y-6 relative border-l border-white/10 pl-6 ml-2">
                {[
                  { title: "Choose SLV Solar", desc: "We are an authorized franchise with approved solar products." },
                  { title: "Install a Solar System", desc: "Our experts design & install the best solar solution for you." },
                  { title: "Apply for Subsidy", desc: "We assist you in filing the subsidy application." },
                  { title: "Enjoy Savings!", desc: "Reduce your electricity bills & earn credits with net metering." }
                ].map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute top-0.5 left-[-31px] h-4 w-4 rounded-full bg-primary border-2 border-secondary flex items-center justify-center">
                      <div className="h-1 w-1 bg-white rounded-full" />
                    </div>
                    <h4 className="text-sm font-bold text-white leading-none mb-1">{step.title}</h4>
                    <p className="text-xs text-emerald-100/70 leading-normal">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Document box */}
            <div className="bg-white rounded-3xl p-8 border border-slate-105 shadow-sm">
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center space-x-2">
                <FileText className="h-4.5 w-4.5 text-primary" />
                <span>Documents Needed for filing:</span>
              </h3>
              <ul className="space-y-3 pt-1">
                {[
                  "Copy of latest electricity bill",
                  "Aadhaar card copy (matching name on bill)",
                  "Bank passbook page copy (for subsidy deposit)",
                  "House tax receipt or occupancy clearance",
                  "Clear roof photograph (pre-installation)"
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-600">
                    <ChevronRight className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Inquiry prompt */}
      <section className="bg-primary text-white py-16 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-95" />
        <div className="relative max-w-4xl mx-auto flex flex-col space-y-5">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white animate-fadeIn">
            Questions About PM Surya Ghar Subsidy?
          </h2>
          <p className="text-sm text-emerald-100/90 max-w-lg mx-auto leading-relaxed">
            Our support desk will guide you on eligibility checks, utility clearances, and structural drawings needed to file successfully.
          </p>
          <div className="pt-2">
            <CTAButton to="/contact" variant="secondary">
              Ask Subsidy Experts
            </CTAButton>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Subsidy;
