interface Category {
  id: string;
  name: string;
  sub: string[];
  href: string;
}
interface Trending {
  id: string;
  img: string;
  category: string;
  time: string;
  title: string;
}
interface PostMain {
  id: string;
  img: string;
  category: string;
  time: string;
  title: string;
  subtitle: string;
  w: string;
  h: string;
}
interface Item {
  id: string;
  img: string;
  category: string;
  time: string;
  title: string;
  subtitle: string;
  w: string;
  h: string;
}
interface Latest {
  id: string;
  img: string;
  category: string;
  time: string;
  title: string;
}
