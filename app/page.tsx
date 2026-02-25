'use client';

import { useState } from 'react';

// Metodologías de genios
const methodologies = [
  {
    id: 'first-principles',
    emoji: '🌟',
    name: 'First Principles',
    tag: 'Recomendada',
    authors: 'Aristóteles / Elon Musk',
    users: ['Elon Musk', 'Jeff Bezos', 'Charlie Munger'],
    description: 'Descompón todo hasta sus verdades fundamentales y reconstruye desde cero.',
    howToUse: 'Identifica las suposiciones básicas de tu tema y cuestiona cada una.',
    template: (topic: string) => [
      `¿Cuáles son las verdades fundamentales sobre ${topic} que nadie cuestiona?`,
      `Desmintiendo los 5 mitos más grandes sobre ${topic}`,
      `${topic} desde cero: reconstruyendo lo que creíamos saber`,
      `Las suposiciones falsas que te impiden dominar ${topic}`,
      `Primeros principios de ${topic}: lo que realmente importa`
    ]
  },
  {
    id: 'inverse-thinking',
    emoji: '🔄',
    name: 'Pensamiento Inverso',
    tag: 'Genio',
    authors: 'Carl Jacobi / Charlie Munger',
    users: ['Charlie Munger', 'Warren Buffett', 'Naval Ravikant'],
    description: 'Piensa en TODAS las formas de fracasar y evítalas.',
    howToUse: 'Lista todo lo que podrías hacer MAL y luego invierte cada punto.',
    template: (topic: string) => [
      `10 errores fatales en ${topic} (y cómo evitarlos)`,
      `Cómo garantizar tu FRACASO en ${topic}`,
      `Lo que NUNCA debes hacer si quieres dominar ${topic}`,
      `Anti-guía de ${topic}: el camino seguro al desastre`,
      `Invierte tu estrategia de ${topic}: lo que los expertos hacen diferente`
    ]
  },
  {
    id: 'second-order',
    emoji: '♟️',
    name: 'Pensamiento de Segundo Orden',
    tag: 'Genio',
    authors: 'Howard Marks',
    users: ['Howard Marks', 'Ray Dalio', 'George Soros'],
    description: 'Piensa en las consecuencias DE las consecuencias.',
    howToUse: 'Para cada acción, pregunta "¿y luego qué?" al menos 3 veces.',
    template: (topic: string) => [
      `Las consecuencias ocultas de ${topic} que nadie menciona`,
      `${topic}: 3 movimientos adelante - lo que viene después`,
      `El efecto dominó de ${topic} en tu vida`,
      `Más allá de lo obvio: el segundo orden de ${topic}`,
      `¿Qué pasa DESPUÉS de dominar ${topic}?`
    ]
  },
  {
    id: 'regret-minimization',
    emoji: '👴',
    name: 'Minimización del Arrepentimiento',
    tag: 'Genio',
    authors: 'Jeff Bezos',
    users: ['Jeff Bezos', 'Tim Ferriss', 'Derek Sivers'],
    description: 'Proyéctate a los 80 años. ¿De qué te arrepentirías?',
    howToUse: 'Imagina tu yo futuro mirando hacia atrás.',
    template: (topic: string) => [
      `A los 80 años te arrepentirás de no haber empezado ${topic}`,
      `${topic}: la decisión que tu yo futuro agradecerá`,
      `No esperes más para ${topic}: carta a mi yo del pasado`,
      `El costo de la inacción en ${topic}`,
      `Por qué empecé ${topic} tarde (y tú no deberías)`,
    ]
  },
  {
    id: 'moonshot',
    emoji: '🌙',
    name: '10x Moonshot Thinking',
    tag: 'Genio',
    authors: 'Google X / Astro Teller',
    users: ['Larry Page', 'Elon Musk', 'Peter Thiel'],
    description: 'No mejores 10%, mejora 10X.',
    howToUse: 'Piensa en soluciones radicalmente diferentes, no incrementales.',
    template: (topic: string) => [
      `Cómo ser 10X mejor en ${topic} (no 10% mejor)`,
      `El moonshot de ${topic}: pensando en grande`,
      `${topic} revolucionario: más allá de las mejoras incrementales`,
      `La versión 10X de tu ${topic}`,
      `Abandona el 10%: estrategia moonshot para ${topic}`
    ]
  },
  {
    id: 'steel-man',
    emoji: '🛡️',
    name: 'Steel Man',
    tag: 'Genio',
    authors: 'Filosofía Analítica',
    users: ['Sam Harris', 'Jordan Peterson', 'Naval Ravikant'],
    description: 'Construye la MEJOR versión del argumento contrario.',
    howToUse: 'Defiende la posición opuesta con toda tu fuerza.',
    template: (topic: string) => [
      `El mejor argumento CONTRA ${topic} (y mi respuesta)`,
      `Defendiendo lo indefendible: el caso a favor del anti-${topic}`,
      `Steel man: por qué los críticos de ${topic} tienen razón (parcialmente)`,
      `Los puntos válidos de quienes odian ${topic}`,
      `Debate honesto: ambos lados de ${topic}`
    ]
  },
  {
    id: 'pre-mortem',
    emoji: '⚰️',
    name: 'Pre-Mortem',
    tag: 'Genio',
    authors: 'Gary Klein',
    users: ['Daniel Kahneman', 'Annie Duke', 'Tim Ferriss'],
    description: 'Imagina que el proyecto ya FRACASÓ. ¿Por qué?',
    howToUse: 'Asume el fracaso y trabaja hacia atrás.',
    template: (topic: string) => [
      `Por qué tu proyecto de ${topic} fracasará (y cómo evitarlo)`,
      `Pre-mortem de ${topic}: anticipando el desastre`,
      `Los 7 asesinos silenciosos de ${topic}`,
      `Autopsia anticipada: salvando tu ${topic} antes de empezar`,
      `Red flags en ${topic} que debes detectar ahora`
    ]
  },
  {
    id: 'via-negativa',
    emoji: '✂️',
    name: 'Vía Negativa',
    tag: 'Genio',
    authors: 'Nassim Taleb',
    users: ['Nassim Taleb', 'Naval Ravikant', 'Tim Ferriss'],
    description: 'MENOS es más. Quita en lugar de agregar.',
    howToUse: 'Identifica qué eliminar para mejorar.',
    template: (topic: string) => [
      `Qué ELIMINAR de tu ${topic} para mejorarlo`,
      `Minimalismo en ${topic}: el poder de quitar`,
      `Las 10 cosas que debes DEJAR de hacer en ${topic}`,
      `${topic} por sustracción: menos es más`,
      `Simplifica tu ${topic}: eliminando lo innecesario`
    ]
  },
  {
    id: 'feynman',
    emoji: '👨‍🏫',
    name: 'Técnica Feynman',
    tag: 'Recomendada',
    authors: 'Richard Feynman',
    users: ['Richard Feynman', 'Bill Gates', 'Tim Urban'],
    description: 'Si no puedes explicarlo simple, no lo entiendes.',
    howToUse: 'Explica el concepto como si fuera para un niño de 5 años.',
    template: (topic: string) => [
      `${topic} explicado para un niño de 5 años`,
      `Guía ultra-simple de ${topic} (sin jerga)`,
      `${topic} en palabras que tu abuela entendería`,
      `La explicación más simple de ${topic} que encontrarás`,
      `Enseñando ${topic}: lo que aprendí al explicarlo`
    ]
  },
  {
    id: 'antifragile',
    emoji: '🦾',
    name: 'Antifragile Thinking',
    tag: 'Genio',
    authors: 'Nassim Nicholas Taleb',
    users: ['Nassim Taleb', 'Ray Dalio', 'Elon Musk'],
    description: 'No solo resistas el caos — CRECE con él.',
    howToUse: 'Diseña sistemas que se beneficien del estrés.',
    template: (topic: string) => [
      `Cómo hacer tu ${topic} antifrágil`,
      `${topic} que mejora con el caos`,
      `Convierte el estrés en combustible para tu ${topic}`,
      `El ${topic} indestructible: más allá de la resiliencia`,
      `Abrazando la volatilidad en ${topic}`
    ]
  },
  {
    id: 'occam',
    emoji: '🪒',
    name: "Occam's Razor",
    tag: 'Genio',
    authors: 'William of Ockham',
    users: ['William of Ockham', 'Albert Einstein', 'Steve Jobs'],
    description: 'La explicación más simple suele ser la correcta.',
    howToUse: 'Elimina toda complejidad innecesaria.',
    template: (topic: string) => [
      `La verdad simple sobre ${topic} que complicamos`,
      `${topic} sin complicaciones: la navaja de Occam`,
      `Cortando la grasa: ${topic} en su forma más pura`,
      `Por qué ${topic} es más simple de lo que crees`,
      `La solución obvia a ${topic} que ignoramos`
    ]
  },
  {
    id: 'stoic',
    emoji: '🏛️',
    name: 'Dicotomía del Control',
    tag: 'Recomendada',
    authors: 'Epictetus / Marcus Aurelius',
    users: ['Marcus Aurelius', 'Epictetus', 'Tim Ferriss'],
    description: 'Enfócate SOLO en lo que puedes controlar.',
    howToUse: 'Separa lo que controlas de lo que no.',
    template: (topic: string) => [
      `Lo que puedes y NO puedes controlar en ${topic}`,
      `Estoicismo aplicado a ${topic}`,
      `Deja de preocuparte por esto en ${topic}`,
      `${topic} zen: enfócate solo en lo importante`,
      `La serenidad de ${topic}: controlando lo controlable`
    ]
  },
  {
    id: 'scamper',
    emoji: '🔄',
    name: 'SCAMPER',
    tag: 'Moderna',
    authors: 'Bob Eberle',
    users: ['Creativos', 'Diseñadores', 'Innovadores'],
    description: 'Sustituir, Combinar, Adaptar, Modificar, Poner otros usos, Eliminar, Reorganizar.',
    howToUse: 'Aplica cada verbo a tu idea.',
    template: (topic: string) => [
      `SCAMPER tu ${topic}: 7 formas de reinventarlo`,
      `¿Qué pasa si COMBINAS ${topic} con...?`,
      `Adaptando ${topic} a nuevos contextos`,
      `${topic} reorganizado: una perspectiva fresca`,
      `Sustituciones creativas en ${topic}`
    ]
  },
  {
    id: 'six-hats',
    emoji: '🎩',
    name: 'Los 6 Sombreros',
    tag: 'Moderna',
    authors: 'Edward de Bono',
    users: ['Equipos creativos', 'Facilitadores', 'Líderes'],
    description: 'Analiza desde 6 perspectivas: Datos, Emociones, Crítica, Optimismo, Creatividad, Organización.',
    howToUse: 'Ponte cada sombrero y analiza desde esa perspectiva.',
    template: (topic: string) => [
      `${topic} visto desde 6 perspectivas diferentes`,
      `El lado emocional de ${topic} que ignoramos`,
      `Crítica constructiva: los problemas reales de ${topic}`,
      `El futuro optimista de ${topic}`,
      `Pensamiento creativo: ${topic} reimaginado`
    ]
  },
  {
    id: 'five-whys',
    emoji: '❓',
    name: 'Los 5 Por Qués',
    tag: 'Moderna',
    authors: 'Sakichi Toyoda',
    users: ['Toyota', 'Lean practitioners', 'Problem solvers'],
    description: 'Pregunta "¿Por qué?" cinco veces consecutivas.',
    howToUse: 'Sigue preguntando "¿Por qué?" hasta llegar a la raíz.',
    template: (topic: string) => [
      `La raíz del problema con ${topic} (5 por qués)`,
      `¿Por qué realmente te importa ${topic}?`,
      `Excavando profundo: la verdad detrás de ${topic}`,
      `5 niveles de ${topic}: del síntoma a la causa`,
      `El "por qué" definitivo de ${topic}`
    ]
  },
  {
    id: 'pareto',
    emoji: '📊',
    name: 'Análisis Pareto',
    tag: 'Moderna',
    authors: 'Vilfredo Pareto',
    users: ['Tim Ferriss', 'Joseph Juran', 'Richard Koch'],
    description: 'La regla 80/20 aplicada a todo.',
    howToUse: 'Encuentra el 20% que produce el 80% de resultados.',
    template: (topic: string) => [
      `El 20% de ${topic} que produce el 80% de resultados`,
      `Pareto en ${topic}: enfócate en lo vital`,
      `Los pocos cruciales vs los muchos triviales en ${topic}`,
      `Hack 80/20 para dominar ${topic} rápido`,
      `Elimina el 80% innecesario de tu ${topic}`
    ]
  },
  {
    id: 'design-thinking',
    emoji: '🎨',
    name: 'Design Thinking',
    tag: 'Moderna',
    authors: 'IDEO / Stanford d.school',
    users: ['Tim Brown (IDEO)', 'Apple', 'Airbnb'],
    description: 'Empatiza, Define, Idea, Prototipa, Testea.',
    howToUse: 'Sigue los 5 pasos centrados en el usuario.',
    template: (topic: string) => [
      `Design Thinking aplicado a ${topic}`,
      `Empatizando con tu audiencia de ${topic}`,
      `Prototipando ideas en ${topic}: falla rápido`,
      `El usuario primero: rediseñando ${topic}`,
      `5 pasos para innovar en ${topic}`
    ]
  },
  {
    id: 'black-swan',
    emoji: '🦢',
    name: 'Black Swan Thinking',
    tag: 'Genio',
    authors: 'Nassim Nicholas Taleb',
    users: ['Nassim Taleb', 'Daniel Kahneman', 'Bridgewater'],
    description: 'Prepárate para eventos impredecibles de alto impacto.',
    howToUse: 'Considera los escenarios extremos que "nunca pasan".',
    template: (topic: string) => [
      `El cisne negro de ${topic}: ¿estás preparado?`,
      `Eventos impredecibles que cambiarán ${topic}`,
      `Lo que no sabes de ${topic} puede destruirte`,
      `Preparándote para lo impensable en ${topic}`,
      `Los "nunca va a pasar" de ${topic} que ya están pasando`
    ]
  }
];

const niches = [
  'Marketing Digital',
  'Productividad',
  'Finanzas Personales',
  'Desarrollo Personal',
  'Tecnología',
  'Emprendimiento',
  'Salud y Fitness',
  'Educación',
  'Creatividad',
  'Liderazgo',
  'Inversiones',
  'Programación',
  'Diseño',
  'Redes Sociales',
  'E-commerce',
  'Inteligencia Artificial',
  'Mindfulness',
  'Carrera Profesional'
];

export default function Home() {
  const [selectedMethod, setSelectedMethod] = useState<typeof methodologies[0] | null>(null);
  const [selectedNiche, setSelectedNiche] = useState('');
  const [customNiche, setCustomNiche] = useState('');
  const [generatedIdeas, setGeneratedIdeas] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const generateIdeas = () => {
    if (!selectedMethod) return;
    const topic = customNiche || selectedNiche;
    if (!topic) return;

    setIsGenerating(true);
    setTimeout(() => {
      const ideas = selectedMethod.template(topic);
      setGeneratedIdeas(ideas);
      setIsGenerating(false);
    }, 800);
  };

  const copyIdea = (idea: string, index: number) => {
    navigator.clipboard.writeText(idea);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const regenerate = () => {
    if (selectedMethod && (customNiche || selectedNiche)) {
      generateIdeas();
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/20">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
            <span className="text-4xl">🧠</span>
            Blog Idea Genius
          </h1>
          <p className="text-purple-300 mt-2">
            Genera ideas de blog usando metodologías de genios como Elon Musk, Charlie Munger y más
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Step 1: Select Methodology */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
            Elige una metodología de pensamiento
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {methodologies.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method)}
                className={`p-4 rounded-xl text-left transition-all duration-300 border ${
                  selectedMethod?.id === method.id
                    ? 'bg-purple-600/40 border-purple-400 shadow-lg shadow-purple-500/20'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-2xl">{method.emoji}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    method.tag === 'Recomendada' ? 'bg-green-500/20 text-green-300' :
                    method.tag === 'Genio' ? 'bg-purple-500/20 text-purple-300' :
                    'bg-blue-500/20 text-blue-300'
                  }`}>
                    {method.tag}
                  </span>
                </div>
                <h3 className="font-semibold text-white mb-1">{method.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{method.description}</p>
                <div className="flex flex-wrap gap-1">
                  {method.users.slice(0, 2).map((user, i) => (
                    <span key={i} className="text-xs bg-white/5 text-gray-300 px-2 py-0.5 rounded">
                      {user}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Step 2: Select Niche */}
        {selectedMethod && (
          <section className="mb-10 animate-fadeIn">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
              Elige tu nicho o tema
            </h2>

            {/* Method info card */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-4 mb-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{selectedMethod.emoji}</span>
                <div>
                  <h3 className="font-semibold text-white">{selectedMethod.name}</h3>
                  <p className="text-sm text-purple-300">{selectedMethod.authors}</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-2">
                <strong className="text-purple-300">Cómo usarlo:</strong> {selectedMethod.howToUse}
              </p>
            </div>

            {/* Niche selection */}
            <div className="flex flex-wrap gap-2 mb-4">
              {niches.map((niche) => (
                <button
                  key={niche}
                  onClick={() => {
                    setSelectedNiche(niche);
                    setCustomNiche('');
                  }}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${
                    selectedNiche === niche && !customNiche
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {niche}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="O escribe tu propio tema..."
                value={customNiche}
                onChange={(e) => {
                  setCustomNiche(e.target.value);
                  setSelectedNiche('');
                }}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <button
                onClick={generateIdeas}
                disabled={!selectedNiche && !customNiche}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Generando...
                  </>
                ) : (
                  <>
                    <span>✨</span>
                    Generar Ideas
                  </>
                )}
              </button>
            </div>
          </section>
        )}

        {/* Step 3: Generated Ideas */}
        {generatedIdeas.length > 0 && (
          <section className="animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                Tus ideas generadas
              </h2>
              <button
                onClick={regenerate}
                className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-sm"
              >
                <span>🔄</span> Regenerar
              </button>
            </div>

            <div className="space-y-3">
              {generatedIdeas.map((idea, index) => (
                <div
                  key={index}
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-purple-400 font-mono text-sm">#{index + 1}</span>
                    <p className="text-white">{idea}</p>
                  </div>
                  <button
                    onClick={() => copyIdea(idea, index)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg text-sm flex items-center gap-1"
                  >
                    {copiedIndex === index ? (
                      <>
                        <span>✓</span> Copiado
                      </>
                    ) : (
                      <>
                        <span>📋</span> Copiar
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Tips section */}
            <div className="mt-8 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span>💡</span> Tips para usar estas ideas
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">→</span>
                  Combina varias metodologías para ideas más únicas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">→</span>
                  Usa el título como punto de partida y personalízalo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">→</span>
                  Prueba diferentes nichos con la misma metodología
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">→</span>
                  Las metodologías "Genio" generan contenido más profundo
                </li>
              </ul>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          <p>Hecho con 🧠 usando metodologías de los más grandes pensadores</p>
          <p className="mt-1">VibeCoding Bootcamp • Frutero Club 🍓</p>
        </div>
      </footer>
    </main>
  );
}
