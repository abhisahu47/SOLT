import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

const slides = [
  {
    title: "6. Evolution",
    content: (
      <div className="text-center h-full flex flex-col justify-center items-center">
        <h1 className="text-6xl font-black text-slate-900 mb-8">Evolution</h1>
        <p className="text-2xl text-slate-600">Abhinandana Sahu</p>
      </div>
    )
  },
  {
    title: "Origin of Universe",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-forest-700">The Big Bang Theory</h2>
        <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 leading-relaxed">
          <li>The universe began in an explosion called the <strong>Big Bang</strong>, approximately <strong>13.7 billion years ago</strong>.</li>
          <li>A singularity — a point of infinite density and gravity — expanded rapidly.</li>
          <li>This was not an explosion of particles <em>through</em> space, but an expansion of space itself.</li>
          <li>In a trillionth of a second, the universe expanded by a factor of 10<sup>78</sup> in volume.</li>
        </ul>
      </div>
    )
  },
  {
    title: "Solar System Formation",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-forest-700">Our Solar System</h2>
        <p className="text-lg text-slate-700">It formed 4.5 billion years ago from the gravitational collapse of a giant interstellar molecular cloud.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-slate-100 p-4 rounded-xl">
             <h3 className="font-bold mb-2">Asteroid Belt</h3>
             <p className="text-sm">Region between Mars and Jupiter occupied by solid, irregularly shaped bodies.</p>
          </div>
          <div className="bg-slate-100 p-4 rounded-xl">
             <h3 className="font-bold mb-2">Kuiper Belt</h3>
             <p className="text-sm">Ring of icy bodies past Neptune, including Pluto.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Primitive Earth Atmosphere",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-forest-700">Reducing Atmosphere</h2>
        <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700">
          <li>Early atmosphere was reducing, principally <strong>CO₂, N₂, and Water Vapor (H₂O)</strong>.</li>
          <li>Also contained H₂, H₂S, NH₃, and CH₄.</li>
          <li><strong>Oparin and Haldane</strong> hypothesized that this reducing environment could form organic compounds (abiotic synthesis).</li>
          <li>"Primordial Soup": Early oceans were a solution of organic molecules.</li>
        </ul>
      </div>
    )
  },
  {
    title: "Miller & Urey Experiment (1953)",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-forest-700">Experimental Proof</h2>
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
           <h3 className="font-bold text-blue-900 mb-2">Setup</h3>
           <p className="mb-4">Sealed flask with CH₄, NH₃, H₂, and H₂O. Electric sparks simulated lightning.</p>
           <h3 className="font-bold text-blue-900 mb-2">Result</h3>
           <p>Within a week, 15% of carbon converted to simple compounds. <strong>Amino acids like Glycine, Alanine, and Aspartic Acid were identified.</strong></p>
        </div>
        <p className="text-slate-600 italic">"We must now admit that the probability of life arising by chance is the same probability of throwing six in dice five million consecutive times." — Sir Fred Hoyle (Criticism)</p>
      </div>
    )
  },
  {
    title: "Evidences of Evolution",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-forest-700">Lines of Evidence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h3 className="font-bold text-slate-900">Paleontological</h3>
            <p className="text-slate-600 text-sm">Fossils of dinosaurs (Triceratops, Stegosaurus) and Archaeopteryx.</p>
          </div>
          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h3 className="font-bold text-slate-900">Embryological</h3>
            <p className="text-slate-600 text-sm">Similar developmental stages (e.g., pharyngeal slits) in vertebrates. Theory of Recapitulation (Ernst Haeckel).</p>
          </div>
          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h3 className="font-bold text-slate-900">Anatomical</h3>
            <p className="text-slate-600 text-sm">Homologous organs (common ancestry) vs Analogous organs (convergent evolution).</p>
          </div>
          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h3 className="font-bold text-slate-900">Vestigial Organs</h3>
            <p className="text-slate-600 text-sm">Appendix, Nictitating membrane, Coccyx.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Natural Selection",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-forest-700">Darwinism</h2>
        <p className="text-xl font-medium text-slate-800">Two Main Points:</p>
        <ol className="list-decimal pl-6 space-y-2 text-lg text-slate-700">
          <li>Descent with Modification</li>
          <li>Natural Selection</li>
        </ol>
        
        <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 mt-4">
          <h3 className="font-bold text-orange-900 mb-2">Mechanism</h3>
          <p className="text-slate-700">Individuals with inherited traits that give them a higher probability of surviving and reproducing in a given environment tend to leave more offspring. This leads to the accumulation of favorable traits over generations.</p>
        </div>
        <p className="text-sm text-slate-500 mt-2">Example: Industrial Melanism in Peppered Moths.</p>
      </div>
    )
  },
  {
    title: "Hardy-Weinberg Principle",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-forest-700">Population Genetics</h2>
        <p className="text-lg text-slate-700">
          In a large, random-mating population, allele frequencies remain constant in the absence of evolutionary forces.
        </p>
        
        <div className="bg-slate-900 text-white p-6 rounded-2xl text-center">
          <p className="text-2xl font-mono mb-2">p² + 2pq + q² = 1</p>
          <p className="text-2xl font-mono">p + q = 1</p>
          <div className="mt-4 text-sm text-slate-400">
             <p>p = frequency of dominant allele</p>
             <p>q = frequency of recessive allele</p>
             <p>2pq = frequency of heterozygotes</p>
          </div>
        </div>
        
        <h3 className="font-bold mt-4">Factors affecting equilibrium:</h3>
        <ul className="list-disc pl-6 text-slate-700">
          <li>Gene Flow (Migration)</li>
          <li>Genetic Drift (Founder Effect, Bottleneck Effect)</li>
          <li>Mutation</li>
          <li>Genetic Recombination</li>
          <li>Natural Selection</li>
        </ul>
      </div>
    )
  },
  {
    title: "Human Evolution",
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-forest-700">Origin and Evolution of Man</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-slate-700 uppercase bg-slate-100">
              <tr>
                <th className="px-4 py-3 rounded-tl-lg">Ancestor</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3 rounded-tr-lg">Features</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Dryopithecus</td>
                <td className="px-4 py-3">15 mya</td>
                <td className="px-4 py-3">Ape-like, hairy, walked like gorillas.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Ramapithecus</td>
                <td className="px-4 py-3">15 mya</td>
                <td className="px-4 py-3">More man-like, walked erect.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Australopithecus</td>
                <td className="px-4 py-3">3-4 mya</td>
                <td className="px-4 py-3">Hunted with stone weapons, brain 400-600cc.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Homo habilis</td>
                <td className="px-4 py-3">2 mya</td>
                <td className="px-4 py-3">First human-like, brain 650-800cc, did not eat meat.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Homo erectus</td>
                <td className="px-4 py-3">1.5 mya</td>
                <td className="px-4 py-3">Java Man, brain 900cc, ate meat.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Neanderthal</td>
                <td className="px-4 py-3">100k-40k yrs</td>
                <td className="px-4 py-3">Used hides, buried dead, brain 1400cc.</td>
              </tr>
              <tr className="bg-forest-50">
                <td className="px-4 py-3 font-bold text-forest-900">Homo sapiens</td>
                <td className="px-4 py-3">75k-10k yrs</td>
                <td className="px-4 py-3">Cave art, agriculture, civilization.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
];

const EvolutionChapter: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/study')}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <ArrowLeft className="h-6 w-6 text-slate-700" />
            </button>
            <div>
              <h1 className="text-lg font-bold text-slate-900 hidden sm:block">Class 12: Evolution</h1>
              <p className="text-xs text-slate-500 sm:hidden">Ch 6: Evolution</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <span>Slide {currentSlide + 1} / {slides.length}</span>
          </div>
        </div>
      </div>

      {/* Slide Viewport */}
      <div className="flex-grow flex items-center justify-center p-4 sm:p-8">
        <div className="bg-white w-full max-w-4xl min-h-[60vh] md:min-h-[70vh] rounded-2xl shadow-xl border border-slate-200 flex flex-col relative overflow-hidden">
           
           {/* Top Bar Decoration */}
           <div className="h-2 bg-forest-500 w-full"></div>

           {/* Content */}
           <div className="flex-grow p-8 md:p-12 flex flex-col">
             <div className="flex items-center gap-2 mb-6">
               <div className="p-2 bg-forest-100 rounded-lg">
                 <BookOpen className="h-5 w-5 text-forest-700" />
               </div>
               <span className="text-sm font-bold text-forest-600 uppercase tracking-wider">
                 {slides[currentSlide].title}
               </span>
             </div>
             
             <div className="flex-grow">
               {slides[currentSlide].content}
             </div>
           </div>

           {/* Navigation Footer */}
           <div className="bg-slate-50 border-t border-slate-100 p-4 flex justify-between items-center">
             <button 
               onClick={prevSlide}
               disabled={currentSlide === 0}
               className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                 currentSlide === 0 
                   ? 'text-slate-300 cursor-not-allowed' 
                   : 'text-slate-700 hover:bg-white hover:shadow-sm'
               }`}
             >
               <ChevronLeft className="h-5 w-5" /> Previous
             </button>

             <button 
               onClick={nextSlide}
               disabled={currentSlide === slides.length - 1}
               className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-colors ${
                 currentSlide === slides.length - 1 
                   ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                   : 'bg-forest-600 text-white hover:bg-forest-700 shadow-md hover:shadow-lg'
               }`}
             >
               {currentSlide === slides.length - 1 ? 'Finish' : 'Next'} <ChevronRight className="h-5 w-5" />
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default EvolutionChapter;