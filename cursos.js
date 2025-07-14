const cursos = {
  "Primer Ciclo": [
    { id: "mate_bas", nombre: "Matemáticas Básicas", creditos: 4, prereqs: [] },
    { id: "quimica", nombre: "Elementos de Química", creditos: 4, prereqs: [] },
    { id: "com_red_1", nombre: "Comunicación y Redacción I", creditos: 3, prereqs: [] },
    { id: "filosofia", nombre: "Filosofía y Ética", creditos: 3, prereqs: [] },
    { id: "biologia_1", nombre: "Biología I", creditos: 5, prereqs: [] },
    { id: "desarrollo_pers", nombre: "Desarrollo Personal y Autonomía", creditos: 2, prereqs: [] },
    { id: "oportunidades_vet", nombre: "Oportunidades de Desarrollo Profesional en MVZ", creditos: 1, prereqs: [] },
    { id: "ingles_1", nombre: "Inglés I", creditos: 2, prereqs: [] }
  ],
  "Segundo Ciclo": [
    { id: "fisica", nombre: "Física Básica", creditos: 4, prereqs: [] },
    { id: "genetica", nombre: "Fundamentos de Genética para las Ciencias Veterinarias", creditos: 2, prereqs: ["biologia_1"] },
    { id: "c_sociales", nombre: "Ciencias Sociales en el Contexto Actual", creditos: 3, prereqs: [] },
    { id: "pract_vet_1", nombre: "Práctica Veterinaria I", creditos: 2, prereqs: [] },
    { id: "com_red_2", nombre: "Comunicación y Redacción II", creditos: 3, prereqs: ["com_red_1"] },
    { id: "pens_cient", nombre: "Pensamiento Científico e Investigación", creditos: 2, prereqs: [] },
    { id: "cultura_ambiental", nombre: "Cultura Ambiental y Desarrollo Sostenible", creditos: 1, prereqs: [] },
    { id: "act_comp_1", nombre: "Actividad Complementaria I", creditos: 1, prereqs: [] },
    { id: "ingles_2", nombre: "Inglés II", creditos: 2, prereqs: ["ingles_1"] }
  ],
  "Tercer Ciclo": [
    { id: "micro_inmuno", nombre: "Microbiología e Inmunología Veterinaria", creditos: 4, prereqs: ["biologia_1"] },
    { id: "nutri_1", nombre: "Nutrición Animal I", creditos: 3, prereqs: ["biologia_1"] },
    { id: "eco_vet", nombre: "Ecología para las Ciencias Veterinarias", creditos: 2, prereqs: ["biologia_1"] },
    { id: "anato_vet", nombre: "Anatomía Veterinaria", creditos: 4, prereqs: ["biologia_1"] },
    { id: "histo_vet", nombre: "Histología Veterinaria", creditos: 3, prereqs: ["biologia_1"] },
    { id: "ingles_3", nombre: "Inglés III", creditos: 2, prereqs: ["ingles_2"] }
  ],
  "Cuarto Ciclo": [
    { id: "bioestad", nombre: "Bioestadística", creditos: 2, prereqs: ["mate_bas"] },
    { id: "fisio_repro", nombre: "Fisiología de la Reproducción", creditos: 3, prereqs: ["histo_vet"] },
    { id: "mejoramiento_gen", nombre: "Mejoramiento Genético", creditos: 3, prereqs: ["genetica"] },
    { id: "nutri_2", nombre: "Nutrición Animal II", creditos: 4, prereqs: ["nutri_1"] },
    { id: "pract_vet_2", nombre: "Práctica Veterinaria II", creditos: 2, prereqs: ["anato_vet"] },
    { id: "fisio_1", nombre: "Fisiología Animal I", creditos: 3, prereqs: ["anato_vet", "histo_vet"] },
    { id: "electiva_1", nombre: "Asignatura Electiva I", creditos: 1, prereqs: [] },
    { id: "ingles_4", nombre: "Inglés IV", creditos: 2, prereqs: ["ingles_3"] }
  ],
  "Quinto Ciclo": [
    { id: "bovinos", nombre: "Producción de Bovinos", creditos: 3, prereqs: ["pract_vet_2"] },
    { id: "farmaco", nombre: "Farmacología Veterinaria", creditos: 3, prereqs: ["fisio_1"] },
    { id: "recursos_alim", nombre: "Recursos y Sistemas de Alimentación Animal", creditos: 2, prereqs: ["nutri_2"] },
    { id: "vida_silvestre", nombre: "Introducción a la Vida Silvestre", creditos: 2, prereqs: ["eco_vet"] },
    { id: "sociologia", nombre: "Sociología Aplicada al Campo Veterinario", creditos: 1, prereqs: ["c_sociales", "pract_vet_2"] },
    { id: "economia", nombre: "Economía de la Producción", creditos: 3, prereqs: ["bioestad"] },
    { id: "fisio_2", nombre: "Fisiología Animal II", creditos: 3, prereqs: ["fisio_1"] },
    { id: "parasitologia", nombre: "Parasitología Veterinaria", creditos: 3, prereqs: ["fisio_1"] }
  ],
  "Sexto Ciclo": [
    { id: "patologia_clin", nombre: "Patología Clínica Veterinaria", creditos: 3, prereqs: ["fisio_2"] },
    { id: "porcinos", nombre: "Producción y Sanidad de Porcinos", creditos: 3, prereqs: ["recursos_alim"] },
    { id: "pract_vet_3", nombre: "Práctica Veterinaria III", creditos: 2, prereqs: ["pract_vet_2"] },
    { id: "patologia", nombre: "Patología Veterinaria", creditos: 4, prereqs: ["fisio_2"] },
    { id: "semiologia", nombre: "Semiología Veterinaria", creditos: 3, prereqs: ["fisio_2"] },
    { id: "epidemiologia", nombre: "Epidemiología Veterinaria", creditos: 3, prereqs: ["bioestad"] },
    { id: "act_comp_2", nombre: "Actividad Complementaria II", creditos: 1, prereqs: [] }
  ],
  "Séptimo Ciclo": [
    { id: "gestion", nombre: "Gestión y Administración", creditos: 3, prereqs: ["economia"] },
    { id: "conservacion", nombre: "Medicina de la Conservación", creditos: 4, prereqs: ["epidemiologia"] },
    { id: "fisiopato", nombre: "Fisiopatología Animal", creditos: 4, prereqs: ["patologia"] },
    { id: "teriogeno", nombre: "Teriogenología", creditos: 3, prereqs: ["patologia"] },
    { id: "anestesia", nombre: "Anestesiología y Técnica Quirúrgica", creditos: 3, prereqs: ["farmaco"] },
    { id: "electiva_2", nombre: "Asignatura Electiva II", creditos: 2, prereqs: [] },
    { id: "act_comp_3", nombre: "Actividad Complementaria III", creditos: 1, prereqs: [] }
  ],
  "Octavo Ciclo": [
    { id: "toxico", nombre: "Toxicología Veterinaria", creditos: 2, prereqs: ["farmaco"] },
    { id: "med_produccion", nombre: "Medicina de Animales de la Producción", creditos: 3, prereqs: ["fisiopato"] },
    { id: "metod_1", nombre: "Metodología de la Investigación I", creditos: 2, prereqs: ["epidemiologia", "fisiopato"] },
    { id: "patol_quir", nombre: "Patología Quirúrgica", creditos: 3, prereqs: ["anestesia"] },
    { id: "aves", nombre: "Producción y Sanidad de Aves", creditos: 4, prereqs: ["fisiopato"] },
    { id: "hidrobio", nombre: "Producción y Sanidad de Hidrobiológicos", creditos: 3, prereqs: ["fisiopato"] },
    { id: "med_comp_1", nombre: "Medicina de Animales de Compañía I", creditos: 3, prereqs: ["fisiopato"] },
    { id: "electiva_3", nombre: "Asignatura Electiva III", creditos: 2, prereqs: [] },
    { id: "act_comp_4", nombre: "Actividad Complementaria IV", creditos: 1, prereqs: [] }
  ],
  "Noveno Ciclo": [
    { id: "negocios", nombre: "Desarrollo de Negocios", creditos: 3, prereqs: ["gestion"] },
    { id: "salud_vet", nombre: "Salud Veterinaria", creditos: 3, prereqs: [] },
    { id: "metod_2", nombre: "Metodología de la Investigación II", creditos: 2, prereqs: ["metod_1"] },
    { id: "imagen", nombre: "Veterinary Imaging", creditos: 3, prereqs: ["fisiopato"] },
    { id: "inocuidad", nombre: "Industrialización e Inocuidad de Alimentos de Origen Animal", creditos: 4, prereqs: ["toxico"] },
    { id: "med_comp_2", nombre: "Medicina de Animales de Compañía II", creditos: 2, prereqs: ["med_comp_1"] },
    { id: "legislacion", nombre: "Legislación Veterinaria", creditos: 1, prereqs: ["sociologia"] },
    { id: "electiva_4", nombre: "Asignatura Electiva IV", creditos: 2, prereqs: [] }
  ],
  "Décimo Ciclo": [
    { id: "investigacion", nombre: "Trabajo de Investigación", creditos: 1, prereqs: [] },
    { id: "rotaciones", nombre: "Rotaciones en Medicina Veterinaria y Zootecnia", creditos: 20, prereqs: [] }
  ]
};
