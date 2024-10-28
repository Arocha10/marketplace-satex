import { PAGE_SIZE } from '../../constants/constants';
import { GET_PRODUCTS } from '../../graphql/queries';

export const mockVariant = {
  name: 'Laptop 13 inch 16GB',
  price: 219900,
  id: '3',
};

export const mockProductVariants = [
  {
    id: '14',
    price: 108720,
    name: 'Gaming PC i7-8700 240GB SSD',
  },
  {
    id: '15',
    price: 109995,
    name: 'Gaming PC R7-2700 240GB SSD',
  },
  {
    id: '16',
    price: 93120,
    name: 'Gaming PC i7-8700 120GB SSD',
  },
  {
    id: '17',
    price: 94920,
    name: 'Gaming PC R7-2700 120GB SSD',
  },
];

export const mockVariantSelected = { ...mockProductVariants[1] };

export const mockEmptyGrid = [
  {
    request: {
      query: GET_PRODUCTS,
      variables: { take: PAGE_SIZE, skip: 0 },
    },
    result: {
      data: {
        products: {
          items: [],
        },
      },
    },
  },
];

export const mockProductGrid = [
  {
    request: {
      query: GET_PRODUCTS,
      variables: { take: PAGE_SIZE, skip: 0 },
    },
    result: {
        data: {
        products: {
          items: [
            {
              id: '24',
              name: 'Tent',
              slug: 'tent',
              description:
                'With tons of space inside (for max. 4 persons), full head height throughout the entire tent and an unusual and striking shape, this tent offers you everything you need.',
              featuredAsset: {
                preview:
                  'https://demo.vendure.io/assets/preview/96/michael-guite-571169-unsplash__preview.jpg',
                height: 1067,
              },
              variants: [
                {
                  id: '38',
                  price: 21493,
                  name: 'Tent',
                },
              ],
            },
            {
              id: '25',
              name: 'Cruiser Skateboard',
              slug: 'cruiser-skateboard',
              description:
                'Based on the 1970s iconic shape, but made to a larger 69cm size, with updated, quality component, these skateboards are great for beginners to learn the foot spacing required, and are perfect for all-day cruising.',
              featuredAsset: {
                preview:
                  'https://demo.vendure.io/assets/preview/35/max-tarkhov-737999-unsplash__preview.jpg',
                height: 1280,
              },
              variants: [
                {
                  id: '39',
                  price: 2499,
                  name: 'Cruiser Skateboard',
                },
              ],
            },
            {
              id: '26',
              name: 'Football',
              slug: 'football',
              description:
                'This football features high-contrast graphics for high-visibility during play, while its machine-stitched tpu casing offers consistent performance.',
              featuredAsset: {
                preview:
                  'https://demo.vendure.io/assets/preview/d6/nik-shuliahin-619349-unsplash__preview.jpg',
                height: 1020,
              },
              variants: [
                {
                  id: '40',
                  price: 5707,
                  name: 'Football',
                },
              ],
            },
            {
              id: '27',
              name: 'Tennis Ball',
              slug: 'tennis-ball',
              description:
                'Our dog loves these tennis balls and they last for some time before they eventually either get lost in some field or bush or the covering comes off due to it being used most of the day every day.',
              featuredAsset: {
                preview:
                  'https://demo.vendure.io/assets/preview/30/ben-hershey-574483-unsplash__preview.jpg',
                height: 1070,
              },
              variants: [
                {
                  id: '41',
                  price: 1273,
                  name: 'Tennis Ball',
                },
              ],
            },
            {
              id: '28',
              name: 'Basketball',
              slug: 'basketball',
              description:
                'The Wilson MVP ball is perfect for playing basketball, and improving your skill for hours on end. Designed for new players, it is created with a high-quality rubber suitable for courts, allowing you to get full use during your practices.',
              featuredAsset: {
                preview:
                  'https://demo.vendure.io/assets/preview/0f/tommy-bebo-600358-unsplash__preview.jpg',
                height: 1600,
              },
              variants: [
                {
                  id: '42',
                  price: 3562,
                  name: 'Basketball',
                },
              ],
            },
            {
              id: '29',
              name: 'Ultraboost Running Shoe',
              slug: 'ultraboost-running-shoe',
              description:
                'With its ultra-light, uber-responsive magic foam and a carbon fiber plate that feels like it’s propelling you forward, the Running Shoe is ready to push you to victories both large and small',
              featuredAsset: {
                preview:
                  'https://demo.vendure.io/assets/preview/ed/chuttersnap-584518-unsplash__preview.jpg',
                height: 1068,
              },
              variants: [
                {
                  id: '43',
                  price: 9999,
                  name: 'Ultraboost Running Shoe Size 40',
                },
                {
                  id: '44',
                  price: 9999,
                  name: 'Ultraboost Running Shoe Size 42',
                },
                {
                  id: '45',
                  price: 9999,
                  name: 'Ultraboost Running Shoe Size 44',
                },
                {
                  id: '46',
                  price: 9999,
                  name: 'Ultraboost Running Shoe Size 46',
                },
              ],
            },
            {
              id: '30',
              name: 'Freerun Running Shoe',
              slug: 'freerun-running-shoe',
              description:
                "The Freerun Men's Running Shoe is built for record-breaking speed. The Flyknit upper delivers ultra-lightweight support that fits like a glove.",
              featuredAsset: {
                preview:
                  'https://demo.vendure.io/assets/preview/0f/imani-clovis-234736-unsplash__preview.jpg',
                height: 1600,
              },
              variants: [
                {
                  id: '47',
                  price: 16000,
                  name: 'Freerun Running Shoe Size 40',
                },
                {
                  id: '48',
                  price: 16000,
                  name: 'Freerun Running Shoe Size 42',
                },
                {
                  id: '49',
                  price: 16000,
                  name: 'Freerun Running Shoe Size 44',
                },
                {
                  id: '50',
                  price: 16000,
                  name: 'Freerun Running Shoe Size 46',
                },
              ],
            },
          ],
        },
      },
    },
  },
];
