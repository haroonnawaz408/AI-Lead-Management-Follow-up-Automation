// Content-matched editorial photos (Unsplash). Swap any URL for your own photography.
const u = (id, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`
export const heroImg = u('1497366216548-37526070297c', 1000)   // bright designer workspace
export const aboutImg = u('1486406146926-c627a92ad1ab', 1000) // modern architecture
export const projectImgs = {
  aurelia: u('1566073771259-6a8506099945'), // luxury hotel
  vanta: u('1441986300917-64674bd600d8'),   // fashion boutique
  orbit: u('1460925895917-afdab827c52f'),   // product / SaaS dashboard on laptop
}
