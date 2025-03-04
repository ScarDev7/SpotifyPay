export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  coverUrl: string;
  spotifyIframe?: string; // Adicionei a propriedade opcional para o iframe
  evaluated: boolean;
}

export const songs: Song[] = [
  {
    id: '1',
    title: 'Good Nigth Menina 2',
    artist: 'MC IG',
    album: 'Ninguem Tá Puro',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b2738300cdbeea20648d9f664823',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/44SHcghjva9vipAIyTvxnw?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },
  {
    id: '2',
    title: '400K',
    artist: 'MC IG',
    album: 'Ninguem Tá Puro',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b2738300cdbeea20648d9f664823',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1i2kguziI3ZbUZnZMKNhQ2?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },
  {
    id: '3',
    title: 'Migo ou Vida?',
    artist: 'MC IG',
    album: 'Ninguem Tá Puro',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b2738300cdbeea20648d9f664823',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0yEz4sDC2dYVGAjH8LTnQz?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  }, 
  {
    id: '4',
    title: '4M Paris',
    artist: 'MC IG',
    album: 'Ninguem Tá Puro',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b2738300cdbeea20648d9f664823',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4paX9Zy3LcnlNQrmtk5TC5?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  }, 
  {
    id: '5',
    title: 'Tá Facin',
    artist: 'MC IG',
    album: 'Ninguem Tá Puro',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b2738300cdbeea20648d9f664823',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/454nbk64HIJEeHqPbzj7KM?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  }, 
  {
    id: '6',
    title: 'Crack com Mussilon',
    artist: 'Matuê',
    album: '333',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b27363ecdc2fc549275b51fbb9a7',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4ssHL7bSnOAE7HjiuLx6Co?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  }, 
  {
    id: '7',
    title: 'Imagina esse Cenário',
    artist: 'Matuê',
    album: '333',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b27363ecdc2fc549275b51fbb9a7',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2fjqfFUq64thFsqfKN01kS?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  }, 
  {
    id: '8',
    title: 'Nav',
    artist: 'Jovem Dex',
    album: 'Nav',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b273fade54ae0700b53ace547a37',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6Jw6uZbuI7k6ZPushXJNkj?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  }, 
  {
    id: '9',
    title: 'Nemo',
    artist: 'JayA Luuck',
    album: 'Nemo',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b2739e5359fc2d6022c30095495a',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5d9VjXqrh4CyjDjVKYnOqZ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  }, 
  {
    id: '10',
    title: 'Relógio',
    artist: 'Jovem Dex',
    album: 'Relógio',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b273ff3ba80f4f8f4ac578175fcc',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6HppJU5SojuWGcQ296a4eb?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  }, 
  {
    id: '11',
    title: 'Inveja o Progresso',
    artist: 'MC Kevin',
    album: 'Isolado no Quarto',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b2731b47d69df1da19fbac786b1b',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/66qtCuFRR6E86N9LAzZGxP?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  }, 
  {
    id: '12',
    title: 'Só Vai Dar Eu',
    artist: 'Iguinho e Lulinha',
    album: 'Single',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b273cd4fd0ee4fcfbe422436a496',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3M0yx8G15ucmQUIvAI7ln3?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },  
  {
    id: '13',
    title: 'Gênio',
    artist: 'Bough',
    album: 'Single',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b27342648c97b142c19f86eb4208',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3dKafQzeRwaE1Vq32nSWYg?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },    
  {
    id: '14',
    title: '10 Carros',
    artist: 'Chefin',
    album: 'Single',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b27389dcaffdbf5aad2a7b0bb623',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2twZl1jsRbJRTNCE6VB6eW?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },    
  {
    id: '15',
    title: 'Vida Chique',
    artist: 'Veigh',
    album: 'Dos Prédios',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b2736ac996c7c01c601a8edc08c7',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6tGQ5RuoGC9jYuiVVLWBMo?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },    
  {
    id: '16',
    title: 'Mil Maneiras',
    artist: 'Veigh',
    album: 'Dos Prédios',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b2736ac996c7c01c601a8edc08c7',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2dab3mNKQHk4LxuXLOFUaA?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },    
  {
    id: '17',
    title: 'Pelo Momento',
    artist: 'Veigh',
    album: 'Dos Prédios',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b2736ac996c7c01c601a8edc08c7',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1HusfIlJmtzSWQIrV5oNR1?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },    
  {
    id: '18',
    title: 'Audio Chorando',
    artist: 'Du Boladão',
    album: 'Single',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b2739e6c375b2be0a164966d6a07',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7sAuDimXBKZyPHQmaQq3yT?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },    
  {
    id: '19',
    title: 'Eu vou Fugir com Ela',
    artist: 'Lucenna Jr',
    album: 'Single',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b273d7612b25204bc1c28eeab964',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6GbvbLQSKMOmzAw3F9p9l1?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },  
  {
    id: '20',
    title: 'Pataco',
    artist: 'MC Paiva',
    album: 'Single',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b27325fbcf01ae05157e4f0f2203',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/606Ps4kfMlkeZp0Zr6Xzrk?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },    
  {
    id: '21',
    title: 'Fogo em Sampa',
    artist: 'Traplaudo',
    album: 'Single',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b27362abf41558bb58c9048fd477',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5vIvRU6exNjfKYCSsqAU2e?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },    
  {
    id: '22',
    title: 'Como Faz Com Ela',
    artist: 'Marília Mendonça',
    album: 'Single',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b2737b4293f65f8fe7003c29279c',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2Gvn46nwyQhUnQiFhlP7WX?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },    
  {
    id: '23',
    title: 'Cuida Bem Dela',
    artist: 'Henrique & Juliano',
    album: 'Single',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b273717a191d0dd76669487ccaac',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0T6QwkFrB2czW5DWj531rQ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },    
  {
    id: '24',
    title: 'Os Anjos Cantam',
    artist: 'Jorge & Mateus',
    album: 'Single',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b273afcda189d3e44b4abefddecb',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6ccKu0LwJzOhLAxBwP2PTk?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },    
  {
    id: '25',
    title: 'Eu, Você, o Mar e Ela',
    artist: 'Luan Santana',
    album: 'Single',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b2731711f153c860d22a47e70893',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/000xYdQfIZ4pDmBGzQalKU?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },    
  {
    id: '26',
    title: 'Meu Pedaço de Pecado',
    artist: 'João Gomes',
    album: 'Single',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b2730d09de3f2862b8d4115a0492',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0KbGTtipoc4GnUiYEVzfQh?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },    
  {
    id: '27',
    title: 'Amor Na Praia',
    artist: 'NATTAN',
    album: 'Single',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b273430015276203dca5020dab68',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3FB06ULqN0WNUSQ3UaMZnF?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },    
  {
    id: '28',
    title: 'stay With Me',
    artist: '1nonly',
    album: 'Single',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b273264a0478cccbc94ac61cb479',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2WYs5LxOZfEyURXu7V0O1a?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },    
  {
    id: '29',
    title: 'Oi Balde',
    artist: 'Zé Neto & Cristiano',
    album: 'Single',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b27339833b5940945cf013e8406c',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4xAGuRRKOgoaZbMGdmTD3N?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  },    
  {
    id: '30',
    title: 'Shakira!',
    artist: '1nonly',
    album: 'Single',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b27303c58779dfc6029341086829',
    spotifyIframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1zCQXSnLkfXq3TzMLr6pWf?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    evaluated: false // Não avaliada
  }, 
]
export const chunkSongs = (songs: Song[], size: number): Song[][] => {
  const chunks = [];
  for (let i = 0; i < songs.length; i += size) {
    chunks.push(songs.slice(i, i + size));
  }
  return chunks;
};