export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  short_description: string;
  description: string;
  old_price: string | undefined ;
  isFeatured: boolean;
  size: Size | undefined;
  color: Color | undefined;
  images: Image[]
  Feedback: []
};

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
};

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
};

export interface Size {
  id: string;
  name: string;
  value: string;
};

export interface Color {
  id: string;
  name: string;
  value: string;
};
