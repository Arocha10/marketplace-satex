import { render, screen } from '@testing-library/react';
import { ProductVariantList } from '../components/ProductVariantList';
import { mockProductVariants, mockVariant, mockVariantSelected } from './mocks/ProductVariant.mock';

describe('ProductVariantList', () => {
  const mockProductVariant = {
    products: mockProductVariants,
    variant: mockVariant,
    updateVariant: jest.fn(() => {

      return;
    }),
  };
  test('renders all variants not selected', () => {
    render(
      <ProductVariantList
        updateVariant={mockProductVariant.updateVariant}
        selected
        products={mockProductVariant.products}
        variant={mockProductVariant.variant}
      />
    );
    const variantsGaming = screen.getAllByText('Gaming', { exact: false });
    expect(variantsGaming.length).toBeLessThan(5);
    let selectedVariant = document.querySelector('.selected');
    expect(selectedVariant).toBeNull()
  });
  test('Render selected variant', () => {
    render(
      <ProductVariantList
        updateVariant={mockProductVariant.updateVariant}
        selected
        products={mockProductVariants}
        variant={mockVariantSelected}
      />
    );
    const priceList = screen.getAllByText('Price:', { exact: false });
    const selectedVariant = document.querySelector('.selected')!;
    let variantRef = priceList[1]
    expect(selectedVariant?.textContent).toBe(variantRef.textContent)
    variantRef = priceList[0].parentElement!
    const selectedVariantStyles = window.getComputedStyle(selectedVariant.parentElement!);
    const variantCardStyles = window.getComputedStyle(variantRef);
    expect(variantCardStyles.backgroundColor !== selectedVariantStyles.backgroundColor).toBe(true);
  });
});
