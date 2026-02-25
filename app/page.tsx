'use client';

import { useState, useEffect } from 'react';

// Metodologías simplificadas pero más profundas
const methodologies = [
  {
    id: 'first-principles',
    emoji: '🔬',
    name: 'First Principles',
    genius: 'Elon Musk',
    oneLiner: 'Destruye las suposiciones. Reconstruye desde la verdad.',
    steps: [
      {
        title: 'Identifica el problema',
        question: '¿Cuál es el problema o tema que quieres explorar?',
        placeholder: 'Ej: La gente no sabe invertir su dinero...',
        hint: 'Sé específico. No "finanzas", sino el problema real.'
      },
      {
        title: 'Lista las suposiciones',
        question: '¿Qué cree TODO EL MUNDO sobre este tema? (aunque sea falso)',
        placeholder: 'Ej: "Necesitas mucho dinero para invertir", "Es muy complicado", "Solo los ricos pueden"...',
        hint: 'Escribe todo lo que la gente asume sin cuestionar.'
      },
      {
        title: 'Cuestiona cada una',
        question: '¿Cuál de esas suposiciones es FALSA o exagerada?',
        placeholder: 'Ej: "Necesitas mucho dinero" es falso porque puedes empezar con $100...',
        hint: 'Aquí está el oro. Las suposiciones falsas son tu contenido.'
      },
      {
        title: 'La verdad fundamental',
        question: '¿Cuál es la VERDAD que la mayoría ignora?',
        placeholder: 'Ej: La verdad es que cualquiera puede invertir desde su celular con $100 y sin saber de economía...',
        hint: 'Esta es tu tesis principal. El corazón de tu artículo.'
      },
      {
        title: 'Reconstruye',
        question: '¿Cómo explicarías esto desde cero a alguien que no sabe nada?',
        placeholder: 'Ej: Paso 1: Descarga esta app. Paso 2: Conecta tu cuenta. Paso 3: Elige un fondo...',
        hint: 'Aquí construyes la solución basada en la verdad, no en mitos.'
      }
    ]
  },
  {
    id: 'inverse',
    emoji: '🔄',
    name: 'Inversión',
    genius: 'Charlie Munger',
    oneLiner: 'Quieres éxito? Primero, asegura el fracaso. Luego evítalo.',
    steps: [
      {
        title: 'Define tu objetivo',
        question: '¿Qué quieres lograr o enseñar?',
        placeholder: 'Ej: Quiero enseñar a la gente a ser productiva...',
        hint: 'El resultado positivo que buscas.'
      },
      {
        title: 'Invierte: Garantiza el fracaso',
        question: 'Si quisieras GARANTIZAR que alguien FRACASE en esto, ¿qué le dirías que haga?',
        placeholder: 'Ej: Revisa tu celular cada 5 minutos, no duermas, di sí a todo, no planifiques nada...',
        hint: 'Sé creativo. Piensa en todos los errores posibles.'
      },
      {
        title: 'Los errores más comunes',
        question: '¿Cuáles de estos errores comete la gente CONSTANTEMENTE?',
        placeholder: 'Ej: El 90% revisa el celular cada 5 minutos. El 80% no duerme suficiente...',
        hint: 'Estos son los villanos de tu artículo.'
      },
      {
        title: 'La inversión',
        question: 'Ahora invierte cada error. ¿Cuál es el comportamiento OPUESTO?',
        placeholder: 'Ej: En vez de revisar el celular → bloquearlo por 2 horas. En vez de no dormir → 8 horas sagradas...',
        hint: 'Cada inversión es un consejo accionable.'
      },
      {
        title: 'El anti-consejo',
        question: '¿Cuál sería el título más provocador usando el ángulo negativo?',
        placeholder: 'Ej: "Cómo garantizar que nunca logres nada: guía completa" o "10 formas de destruir tu productividad"',
        hint: 'Los títulos negativos generan más clicks. Es psicología.'
      }
    ]
  },
  {
    id: 'feynman',
    emoji: '👶',
    name: 'Técnica Feynman',
    genius: 'Richard Feynman',
    oneLiner: 'Si no lo puedes explicar a un niño, no lo entiendes.',
    steps: [
      {
        title: 'El concepto complejo',
        question: '¿Qué concepto "complicado" quieres explicar?',
        placeholder: 'Ej: Blockchain, inversión en bolsa, inteligencia artificial, SEO...',
        hint: 'Algo que la gente piensa que es difícil.'
      },
      {
        title: 'Explícalo como a un niño de 8 años',
        question: 'Sin jerga técnica, ¿cómo explicarías esto a un niño curioso?',
        placeholder: 'Ej: Blockchain es como un cuaderno mágico donde todos pueden escribir, pero nadie puede borrar...',
        hint: 'Usa analogías del mundo real. Nada de palabras técnicas.'
      },
      {
        title: '¿Dónde te trabas?',
        question: '¿En qué parte de la explicación te confundes o no sabes cómo continuar?',
        placeholder: 'Ej: No sé cómo explicar por qué es seguro sin hablar de criptografía...',
        hint: 'Los puntos donde te trabas = lo que no entiendes bien. Investiga eso.'
      },
      {
        title: 'La analogía perfecta',
        question: '¿Con qué cosa cotidiana podrías comparar este concepto?',
        placeholder: 'Ej: Es como WhatsApp pero para dinero. Es como un libro de recetas pero para código...',
        hint: 'Las mejores explicaciones conectan lo nuevo con lo familiar.'
      },
      {
        title: 'La explicación final',
        question: 'Ahora escribe la explicación completa en 3 oraciones simples:',
        placeholder: 'Ej: 1) Bitcoin es dinero digital. 2) Funciona sin bancos porque todos verifican las transacciones. 3) Es seguro porque no puedes cambiar el historial.',
        hint: 'Si puedes decirlo en 3 oraciones, lo entiendes de verdad.'
      }
    ]
  },
  {
    id: 'premortem',
    emoji: '💀',
    name: 'Pre-Mortem',
    genius: 'Daniel Kahneman',
    oneLiner: 'El proyecto ya fracasó. Ahora descubre por qué.',
    steps: [
      {
        title: 'El proyecto/idea',
        question: '¿Qué proyecto, idea o decisión quieres analizar?',
        placeholder: 'Ej: Lanzar mi curso online, empezar un negocio, cambiar de carrera...',
        hint: 'Algo que estás por hacer o que otros hacen.'
      },
      {
        title: 'Viaja al futuro: FRACASÓ',
        question: 'Imagina que estamos en 1 año y FRACASÓ completamente. ¿Por qué falló?',
        placeholder: 'Ej: No validé la idea antes, me quedé sin dinero, no tenía audiencia, el producto era malo...',
        hint: 'Sé brutalmente honesto. ¿Qué podría salir mal?'
      },
      {
        title: 'Las señales de advertencia',
        question: '¿Qué señales tempranas indicarían que va hacia el fracaso?',
        placeholder: 'Ej: Si en el primer mes no tengo 100 seguidores, si nadie responde mis emails, si no puedo explicar el valor...',
        hint: 'Estas son las métricas que debes vigilar.'
      },
      {
        title: 'El plan de prevención',
        question: '¿Qué harías DIFERENTE para evitar cada punto de fracaso?',
        placeholder: 'Ej: Validar con 10 personas antes de crear. Tener 6 meses de ahorro. Construir audiencia primero...',
        hint: 'Cada prevención es un consejo de oro para tu artículo.'
      },
      {
        title: 'El checklist anti-fracaso',
        question: 'Convierte todo en un checklist: "Antes de X, asegúrate de Y"',
        placeholder: 'Ej: Antes de lanzar, asegúrate de tener 10 personas que pagarían. Antes de renunciar, asegúrate de tener 6 meses...',
        hint: 'Los checklists son contenido de altísimo valor.'
      }
    ]
  },
  {
    id: 'secondorder',
    emoji: '♟️',
    name: 'Segundo Orden',
    genius: 'Howard Marks',
    oneLiner: '¿Y luego qué? ¿Y luego qué? ¿Y luego qué?',
    steps: [
      {
        title: 'La decisión/acción',
        question: '¿Qué decisión, tendencia o acción quieres analizar?',
        placeholder: 'Ej: Trabajar remoto, usar IA para todo, invertir en crypto...',
        hint: 'Algo que la gente hace o está considerando.'
      },
      {
        title: 'Consecuencia obvia (1er orden)',
        question: '¿Cuál es el resultado OBVIO e inmediato?',
        placeholder: 'Ej: Trabajar remoto = más flexibilidad, no hay tráfico, trabajas en pijama...',
        hint: 'Lo que todo el mundo ve y menciona.'
      },
      {
        title: 'Y luego qué? (2do orden)',
        question: '¿Qué pasa DESPUÉS de esa consecuencia? ¿Qué efectos secundarios tiene?',
        placeholder: 'Ej: Más flexibilidad → trabajas más horas porque no hay límites → te quemas...',
        hint: 'Aquí empiezan las sorpresas.'
      },
      {
        title: 'Y luego qué? (3er orden)',
        question: '¿Y qué pasa después de ESO? Sigue la cadena...',
        placeholder: 'Ej: Te quemas → tu productividad baja → te despiden o renuncias → buscas trabajo presencial...',
        hint: 'Las consecuencias de las consecuencias de las consecuencias.'
      },
      {
        title: 'La perspectiva oculta',
        question: '¿Qué conclusión NO OBVIA puedes sacar de este análisis?',
        placeholder: 'Ej: El trabajo remoto puede ser una trampa si no pones límites estrictos. La "libertad" puede convertirse en prisión...',
        hint: 'Esta perspectiva contraintuitiva es tu ángulo único.'
      }
    ]
  },
  {
    id: 'steelman',
    emoji: '🛡️',
    name: 'Steel Man',
    genius: 'Sam Harris',
    oneLiner: 'Defiende a tu enemigo mejor que él mismo.',
    steps: [
      {
        title: 'Tu posición',
        question: '¿Cuál es una opinión FUERTE que tienes sobre algo?',
        placeholder: 'Ej: Creo que las redes sociales son tóxicas, creo que la universidad no vale la pena...',
        hint: 'Algo controversial donde tengas una posición clara.'
      },
      {
        title: 'La posición contraria',
        question: '¿Qué dice la gente que NO está de acuerdo contigo?',
        placeholder: 'Ej: Las redes sociales conectan personas, dan oportunidades, democratizan la información...',
        hint: 'No la versión estúpida. La versión INTELIGENTE del argumento contrario.'
      },
      {
        title: 'Steel Man: Hazlo más fuerte',
        question: 'Ahora MEJORA el argumento contrario. ¿Cuál es la MEJOR versión posible?',
        placeholder: 'Ej: Las redes sociales han permitido que millones de personas marginadas encuentren comunidad y oportunidades económicas que jamás tendrían de otra forma...',
        hint: 'Defiende la posición contraria como si fuera tuya.'
      },
      {
        title: '¿En qué tienen razón?',
        question: '¿Qué parte del argumento contrario es VÁLIDA y deberías incorporar?',
        placeholder: 'Ej: Es verdad que las redes dan acceso a personas que de otra forma no tendrían voz...',
        hint: 'Nadie tiene 100% la razón ni 100% está equivocado.'
      },
      {
        title: 'Tu posición mejorada',
        question: '¿Cómo cambia tu opinión original después de este ejercicio?',
        placeholder: 'Ej: Las redes sociales son herramientas poderosas que pueden ser tóxicas O transformadoras dependiendo de cómo las uses. El problema no es la red, es...',
        hint: 'Las mejores opiniones son las que sobreviven al acero.'
      }
    ]
  }
];

interface WorkshopAnswers {
  [stepIndex: number]: string;
}

interface SavedIdea {
  id: string;
  methodology: string;
  methodologyEmoji: string;
  answers: WorkshopAnswers;
  outline: GeneratedOutline | null;
  createdAt: number;
}

interface GeneratedOutline {
  hook: string;
  title: string;
  thesis: string;
  sections: {title: string; points: string[]}[];
  conclusion: string;
  cta: string;
}

export default function Home() {
  const [selectedMethod, setSelectedMethod] = useState<typeof methodologies[0] | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<WorkshopAnswers>({});
  const [generatedOutline, setGeneratedOutline] = useState<GeneratedOutline | null>(null);
  const [savedIdeas, setSavedIdeas] = useState<SavedIdea[]>([]);
  const [view, setView] = useState<'home' | 'workshop' | 'ideas'>('home');
  const [isGenerating, setIsGenerating] = useState(false);

  // Cargar ideas guardadas
  useEffect(() => {
    const saved = localStorage.getItem('blog-genius-ideas-v2');
    if (saved) {
      setSavedIdeas(JSON.parse(saved));
    }
  }, []);

  // Guardar ideas
  useEffect(() => {
    localStorage.setItem('blog-genius-ideas-v2', JSON.stringify(savedIdeas));
  }, [savedIdeas]);

  const startWorkshop = (method: typeof methodologies[0]) => {
    setSelectedMethod(method);
    setCurrentStep(0);
    setAnswers({});
    setGeneratedOutline(null);
    setView('workshop');
  };

  const nextStep = () => {
    if (selectedMethod && currentStep < selectedMethod.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateOutline = () => {
    if (!selectedMethod) return;
    
    setIsGenerating(true);
    
    // Simular generación (en una versión real, esto sería una llamada a IA)
    setTimeout(() => {
      const outline = createOutlineFromAnswers(selectedMethod, answers);
      setGeneratedOutline(outline);
      setIsGenerating(false);
    }, 1500);
  };

  const createOutlineFromAnswers = (method: typeof methodologies[0], ans: WorkshopAnswers): GeneratedOutline => {
    // Lógica personalizada por metodología
    const firstAnswer = ans[0] || 'tu tema';
    const keyInsight = ans[3] || ans[2] || 'tu insight principal';
    
    let hook = '';
    let title = '';
    let thesis = '';
    let sections: {title: string; points: string[]}[] = [];
    let conclusion = '';
    let cta = '';

    switch (method.id) {
      case 'first-principles':
        hook = `Todo lo que te dijeron sobre ${firstAnswer} es mentira. Bueno, casi todo.`;
        title = `${firstAnswer}: Destruyendo los mitos y reconstruyendo desde cero`;
        thesis = ans[3] || 'La verdad que la mayoría ignora...';
        sections = [
          { title: 'Los mitos que todos creen', points: (ans[1] || '').split(',').map(s => s.trim()).filter(Boolean).slice(0, 3) },
          { title: 'Por qué son falsos', points: (ans[2] || '').split('.').map(s => s.trim()).filter(Boolean).slice(0, 3) },
          { title: 'La verdad fundamental', points: [ans[3] || 'El principio base'] },
          { title: 'Cómo aplicarlo desde cero', points: (ans[4] || '').split('.').map(s => s.trim()).filter(Boolean).slice(0, 4) }
        ];
        conclusion = `La próxima vez que escuches un "así se hace" sobre ${firstAnswer}, cuestiona todo.`;
        cta = '¿Qué otro mito sobre este tema deberíamos destruir? Déjalo en los comentarios.';
        break;

      case 'inverse':
        hook = `¿Quieres fracasar en ${firstAnswer}? Tengo la guía perfecta para ti.`;
        title = ans[4] || `Cómo garantizar tu fracaso en ${firstAnswer} (y qué hacer en su lugar)`;
        thesis = 'A veces la mejor forma de ganar es saber exactamente cómo perder.';
        sections = [
          { title: 'La receta del desastre', points: (ans[1] || '').split(',').map(s => s.trim()).filter(Boolean).slice(0, 4) },
          { title: 'Por qué la gente sigue cayendo', points: (ans[2] || '').split('.').map(s => s.trim()).filter(Boolean).slice(0, 3) },
          { title: 'La inversión: qué hacer en su lugar', points: (ans[3] || '').split('.').map(s => s.trim()).filter(Boolean).slice(0, 4) }
        ];
        conclusion = 'El éxito no es hacer las cosas bien. Es dejar de hacer las cosas mal.';
        cta = '¿Cuál de estos errores has cometido? Confiesa en los comentarios (sin juicio).';
        break;

      case 'feynman':
        hook = `${firstAnswer} suena complicado. No lo es. Te lo explico como si tuvieras 8 años.`;
        title = `${firstAnswer} explicado para un niño (y por qué los expertos lo complican)`;
        thesis = 'Si no puedes explicarlo simple, no lo entiendes. Y muchos "expertos" no lo entienden.';
        sections = [
          { title: 'La explicación de 8 años', points: [ans[1] || 'La versión simple'] },
          { title: 'La analogía perfecta', points: [ans[3] || 'Como cuando...'] },
          { title: 'En 3 oraciones', points: (ans[4] || '').split('.').map(s => s.trim()).filter(Boolean).slice(0, 3) },
          { title: 'Por qué los expertos lo complican', points: ['Jerga innecesaria', 'Ego intelectual', 'No lo entienden realmente'] }
        ];
        conclusion = `Ahora puedes explicar ${firstAnswer} en una cena y sonar inteligente. De nada.`;
        cta = '¿Qué otro concepto "complicado" quieres que simplifique? Pídelo abajo.';
        break;

      case 'premortem':
        hook = `Tu proyecto de ${firstAnswer} va a fracasar. Lo siento, pero es estadísticamente probable. A menos que...`;
        title = `Por qué tu ${firstAnswer} va a fracasar (y el checklist para evitarlo)`;
        thesis = 'Los ganadores no tienen más suerte. Tienen mejor prevención.';
        sections = [
          { title: 'Las formas más comunes de morir', points: (ans[1] || '').split(',').map(s => s.trim()).filter(Boolean).slice(0, 4) },
          { title: 'Las señales de advertencia', points: (ans[2] || '').split(',').map(s => s.trim()).filter(Boolean).slice(0, 3) },
          { title: 'El plan de prevención', points: (ans[3] || '').split('.').map(s => s.trim()).filter(Boolean).slice(0, 4) },
          { title: 'El checklist anti-fracaso', points: (ans[4] || '').split('.').map(s => s.trim()).filter(Boolean).slice(0, 5) }
        ];
        conclusion = 'El fracaso no es el enemigo. La sorpresa sí. Ahora ya no te sorprenderá.';
        cta = '¿Qué punto de fracaso me faltó? Agrégalo en los comentarios para ayudar a otros.';
        break;

      case 'secondorder':
        hook = `Todos hablan de ${firstAnswer}. Nadie habla de lo que viene DESPUÉS.`;
        title = `${firstAnswer}: Las consecuencias ocultas que nadie te dice`;
        thesis = 'El problema no es la decisión. Es no pensar 3 movimientos adelante.';
        sections = [
          { title: 'Lo obvio (que todos ven)', points: (ans[1] || '').split(',').map(s => s.trim()).filter(Boolean).slice(0, 3) },
          { title: 'El segundo orden (que pocos ven)', points: (ans[2] || '').split('.').map(s => s.trim()).filter(Boolean).slice(0, 3) },
          { title: 'El tercer orden (que casi nadie ve)', points: (ans[3] || '').split('.').map(s => s.trim()).filter(Boolean).slice(0, 3) },
          { title: 'La conclusión contraintuitiva', points: [ans[4] || 'Lo que realmente significa'] }
        ];
        conclusion = 'Antes de tu próxima decisión, pregunta "¿y luego qué?" tres veces. Tu yo futuro te lo agradecerá.';
        cta = '¿Qué otra consecuencia de segundo orden ves? El debate está abierto.';
        break;

      case 'steelman':
        hook = `Voy a defender algo con lo que no estoy de acuerdo. Y tal vez cambies de opinión.`;
        title = `El mejor argumento a favor de ${firstAnswer} (aunque no estés de acuerdo)`;
        thesis = 'Las opiniones fuertes vienen de entender AMBOS lados, no de ignorar uno.';
        sections = [
          { title: 'Mi posición original', points: [ans[0] || 'Lo que yo creo'] },
          { title: 'El argumento contrario (versión débil)', points: (ans[1] || '').split(',').map(s => s.trim()).filter(Boolean).slice(0, 2) },
          { title: 'El Steel Man (versión fuerte)', points: (ans[2] || '').split('.').map(s => s.trim()).filter(Boolean).slice(0, 3) },
          { title: '¿En qué tienen razón?', points: (ans[3] || '').split('.').map(s => s.trim()).filter(Boolean).slice(0, 2) },
          { title: 'Mi posición evolucionada', points: [ans[4] || 'Lo que ahora creo'] }
        ];
        conclusion = 'Las mejores ideas sobreviven al acero. Si la tuya no puede, tal vez necesita evolucionar.';
        cta = '¿Cambié tu perspectiva? ¿O tienes un contra-argumento aún más fuerte? Debatamos.';
        break;

      default:
        hook = `Esto va a cambiar cómo piensas sobre ${firstAnswer}.`;
        title = `Una nueva perspectiva sobre ${firstAnswer}`;
        thesis = keyInsight;
        sections = [{ title: 'El punto principal', points: Object.values(ans).filter(Boolean).slice(0, 4) as string[] }];
        conclusion = 'Aplica esto hoy y ve qué pasa.';
        cta = '¿Qué piensas? Déjalo en los comentarios.';
    }

    return { hook, title, thesis, sections, conclusion, cta };
  };

  const saveIdea = () => {
    if (!selectedMethod || !generatedOutline) return;
    
    const newIdea: SavedIdea = {
      id: Date.now().toString(),
      methodology: selectedMethod.name,
      methodologyEmoji: selectedMethod.emoji,
      answers,
      outline: generatedOutline,
      createdAt: Date.now()
    };
    
    setSavedIdeas([newIdea, ...savedIdeas]);
  };

  const deleteIdea = (id: string) => {
    setSavedIdeas(savedIdeas.filter(idea => idea.id !== id));
  };

  const exportOutline = (outline: GeneratedOutline) => {
    const text = `# ${outline.title}

## Hook
${outline.hook}

## Tesis
${outline.thesis}

${outline.sections.map(s => `## ${s.title}
${s.points.map(p => `- ${p}`).join('\n')}`).join('\n\n')}

## Conclusión
${outline.conclusion}

## Call to Action
${outline.cta}
`;
    
    navigator.clipboard.writeText(text);
    alert('¡Outline copiado al portapapeles!');
  };

  const progress = selectedMethod ? ((currentStep + 1) / selectedMethod.steps.length) * 100 : 0;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/30 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => { setView('home'); setSelectedMethod(null); }}
            className="text-2xl font-bold text-white flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span>🧠</span>
            <span className="hidden sm:inline">Blog Idea Genius</span>
            <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full ml-2">v2</span>
          </button>
          
          <div className="flex gap-2">
            <button
              onClick={() => setView('home')}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                view === 'home' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Workshop
            </button>
            <button
              onClick={() => setView('ideas')}
              className={`px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-1 ${
                view === 'ideas' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Mis Ideas {savedIdeas.length > 0 && <span className="bg-white/20 px-1.5 rounded-full text-xs">{savedIdeas.length}</span>}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* HOME VIEW */}
        {view === 'home' && (
          <>
            {/* Hero */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                No generes títulos.<br/>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Construye ideas.
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Workshops interactivos basados en metodologías de genios. 
                No te damos títulos genéricos — te guiamos para que PIENSES diferente.
              </p>
            </div>

            {/* Methodology Cards */}
            <div className="grid gap-4">
              {methodologies.map((method) => (
                <button
                  key={method.id}
                  onClick={() => startWorkshop(method)}
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-2xl p-6 text-left transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl group-hover:scale-110 transition-transform">{method.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-white">{method.name}</h3>
                        <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full">
                          {method.genius}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-3">{method.oneLiner}</p>
                      <div className="flex items-center gap-2 text-sm text-purple-400">
                        <span>{method.steps.length} pasos</span>
                        <span>•</span>
                        <span>~10 minutos</span>
                        <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                          Empezar →
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Philosophy */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-white mb-6">¿Por qué es diferente?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <span className="text-3xl mb-3 block">🎯</span>
                  <h3 className="font-bold text-white mb-2">No es aleatorio</h3>
                  <p className="text-gray-400 text-sm">Cada pregunta está diseñada para extraer insights específicos de TU experiencia.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <span className="text-3xl mb-3 block">🧠</span>
                  <h3 className="font-bold text-white mb-2">Te hace pensar</h3>
                  <p className="text-gray-400 text-sm">No te da la respuesta — te guía para que la descubras. Eso genera contenido único.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <span className="text-3xl mb-3 block">📝</span>
                  <h3 className="font-bold text-white mb-2">Outline completo</h3>
                  <p className="text-gray-400 text-sm">Al final tienes título, hook, estructura y CTA. Listo para escribir.</p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* WORKSHOP VIEW */}
        {view === 'workshop' && selectedMethod && (
          <>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                <span>{selectedMethod.emoji} {selectedMethod.name}</span>
                <span>Paso {currentStep + 1} de {selectedMethod.steps.length}</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Current Step */}
            {!generatedOutline ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="mb-6">
                  <span className="text-sm text-purple-400 font-medium">
                    {selectedMethod.steps[currentStep].title}
                  </span>
                  <h2 className="text-2xl font-bold text-white mt-2">
                    {selectedMethod.steps[currentStep].question}
                  </h2>
                  <p className="text-gray-500 text-sm mt-2">
                    💡 {selectedMethod.steps[currentStep].hint}
                  </p>
                </div>

                <textarea
                  value={answers[currentStep] || ''}
                  onChange={(e) => setAnswers({...answers, [currentStep]: e.target.value})}
                  placeholder={selectedMethod.steps[currentStep].placeholder}
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 min-h-[200px] resize-y text-lg"
                  autoFocus
                />

                <div className="flex justify-between mt-6">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="px-6 py-3 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    ← Anterior
                  </button>

                  {currentStep < selectedMethod.steps.length - 1 ? (
                    <button
                      onClick={nextStep}
                      disabled={!answers[currentStep]?.trim()}
                      className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      Siguiente →
                    </button>
                  ) : (
                    <button
                      onClick={generateOutline}
                      disabled={!answers[currentStep]?.trim() || isGenerating}
                      className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
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
                        <>✨ Generar Outline</>
                      )}
                    </button>
                  )}
                </div>

                {/* Step indicators */}
                <div className="flex justify-center gap-2 mt-8">
                  {selectedMethod.steps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentStep(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        idx === currentStep 
                          ? 'bg-purple-500 scale-125' 
                          : answers[idx] 
                            ? 'bg-purple-500/50' 
                            : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              /* Generated Outline */
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                      <span>✅</span> Tu outline está listo
                    </h2>
                    <div className="flex gap-2">
                      <button
                        onClick={() => exportOutline(generatedOutline)}
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm flex items-center gap-1 transition-all"
                      >
                        📋 Copiar
                      </button>
                      <button
                        onClick={saveIdea}
                        className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm flex items-center gap-1 transition-all"
                      >
                        💾 Guardar
                      </button>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <span className="text-xs text-purple-400 font-medium">TÍTULO</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{generatedOutline.title}</h3>
                </div>

                {/* Hook */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <span className="text-xs text-purple-400 font-medium">HOOK (primera línea)</span>
                  <p className="text-lg text-gray-300 mt-1 italic">"{generatedOutline.hook}"</p>
                </div>

                {/* Thesis */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <span className="text-xs text-purple-400 font-medium">TESIS PRINCIPAL</span>
                  <p className="text-lg text-white mt-1">{generatedOutline.thesis}</p>
                </div>

                {/* Sections */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <span className="text-xs text-purple-400 font-medium">ESTRUCTURA</span>
                  <div className="mt-4 space-y-4">
                    {generatedOutline.sections.map((section, idx) => (
                      <div key={idx} className="border-l-2 border-purple-500/50 pl-4">
                        <h4 className="font-semibold text-white">{idx + 1}. {section.title}</h4>
                        <ul className="mt-2 space-y-1">
                          {section.points.filter(Boolean).map((point, pidx) => (
                            <li key={pidx} className="text-gray-400 text-sm flex items-start gap-2">
                              <span className="text-purple-400">→</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conclusion */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <span className="text-xs text-purple-400 font-medium">CONCLUSIÓN</span>
                  <p className="text-lg text-gray-300 mt-1">{generatedOutline.conclusion}</p>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6">
                  <span className="text-xs text-purple-400 font-medium">CALL TO ACTION</span>
                  <p className="text-lg text-white mt-1">{generatedOutline.cta}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setGeneratedOutline(null);
                      setCurrentStep(0);
                    }}
                    className="flex-1 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl transition-all"
                  >
                    🔄 Empezar de nuevo
                  </button>
                  <button
                    onClick={() => setView('home')}
                    className="flex-1 px-6 py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-xl transition-all"
                  >
                    🧠 Probar otra metodología
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* IDEAS VIEW */}
        {view === 'ideas' && (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Mis Ideas Guardadas</h1>
              <p className="text-gray-400">Tus outlines generados, listos para convertir en contenido.</p>
            </div>

            {savedIdeas.length === 0 ? (
              <div className="text-center py-16">
                <span className="text-6xl mb-4 block">📭</span>
                <h3 className="text-xl font-bold text-white mb-2">No tienes ideas guardadas</h3>
                <p className="text-gray-400 mb-6">Completa un workshop y guarda tu outline.</p>
                <button
                  onClick={() => setView('home')}
                  className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl transition-all"
                >
                  Empezar un workshop
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {savedIdeas.map((idea) => (
                  <div key={idea.id} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-sm text-purple-400">{idea.methodologyEmoji} {idea.methodology}</span>
                        <h3 className="text-lg font-bold text-white mt-1">{idea.outline?.title}</h3>
                        <p className="text-gray-500 text-sm mt-1">
                          {new Date(idea.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => idea.outline && exportOutline(idea.outline)}
                          className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
                          title="Copiar"
                        >
                          📋
                        </button>
                        <button
                          onClick={() => deleteIdea(idea.id)}
                          className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition-all"
                          title="Eliminar"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                    
                    {idea.outline && (
                      <div className="bg-black/20 rounded-lg p-4 mt-4">
                        <p className="text-gray-400 text-sm italic">"{idea.outline.hook}"</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {idea.outline.sections.map((s, idx) => (
                            <span key={idx} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                              {s.title}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          <p>Piensa como un genio. Escribe como tú.</p>
          <p className="mt-1">VibeCoding Bootcamp • Frutero Club 🍓</p>
        </div>
      </footer>
    </main>
  );
}
