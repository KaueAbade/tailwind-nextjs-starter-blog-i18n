type Project = {
  title: string
  description: string
  imgSrc: string
  href: string
}

type ProjectsData = {
  [locale: string]: Project[]
}

const projectsData: ProjectsData = {
  pt: [
    {
      title: 'Um motor de busca',
      description: `E se você pudesse pesquisar qualquer informação no mundo? Páginas da web, imagens, vídeos
        e muito mais. O Google oferece diversos recursos para ajudar você a encontrar exatamente o que procura.`,
      imgSrc: '/static/images/google.png',
      href: 'https://www.google.com',
    },
    {
      title: 'A Máquina do Tempo',
      description: `Imagine poder viajar no tempo, para o passado ou para o futuro. Basta girar o botão
        para a data desejada e pressionar "Ir". Não se preocupe mais com chaves perdidas ou
        fones de ouvido esquecidos com esta solução simples e acessível.`,
      imgSrc: '/static/images/time-machine.jpg',
      href: '/blog/a-maquina-do-tempo',
    },
  ],

  en: [
    {
      title: 'A Search Engine',
      description: `What if you could look up any information in the world? Webpages, images, videos
        and more. Google has many features to help you find exactly what you're looking
        for.`,
      imgSrc: '/static/images/google.png',
      href: 'https://www.google.com',
    },
    {
      title: 'The Time Machine',
      description: `Imagine being able to travel back in time or to the future. Simple turn the knob
        to the desired date and press "Go". No more worrying about lost keys or
        forgotten headphones with this simple yet affordable solution.`,
      imgSrc: '/static/images/time-machine.jpg',
      href: '/blog/a-maquina-do-tempo',
    },
  ],
}

export default projectsData
