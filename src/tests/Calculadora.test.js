import { mount } from '@vue/test-utils';
import Calculadora from '@/views/Calculadora.vue';
import { describe, it, expect } from 'vitest';

describe('Calculadora', () => {
  it('realitza la suma de 2 + 2', async () => {
    const wrapper = mount(Calculadora);
    await wrapper.find('[data-testid="digit-2"]').trigger('click');
    await wrapper.find('[data-testid="operation-add"]').trigger('click');
    await wrapper.find('[data-testid="digit-2"]').trigger('click');
    await wrapper.find('[data-testid="equal"]').trigger('click');

    expect(wrapper.text()).toContain('4');
  });

  it('realitza la resta de 5 - 3', async () => {
    const wrapper = mount(Calculadora);
    await wrapper.find('[data-testid="digit-5"]').trigger('click');
    await wrapper.find('[data-testid="operation-subtract"]').trigger('click');
    await wrapper.find('[data-testid="digit-3"]').trigger('click');
    await wrapper.find('[data-testid="equal"]').trigger('click');

    expect(wrapper.text()).toContain('2');
  });

  it('realitza la multiplicació de 3 × 3', async () => {
    const wrapper = mount(Calculadora);
    await wrapper.find('[data-testid="digit-3"]').trigger('click');
    await wrapper.find('[data-testid="operation-multiply"]').trigger('click');
    await wrapper.find('[data-testid="digit-3"]').trigger('click');
    await wrapper.find('[data-testid="equal"]').trigger('click');

    expect(wrapper.text()).toContain('9');
  });

  it('realitza la divisió de 8 ÷ 2', async () => {
    const wrapper = mount(Calculadora);
    await wrapper.find('[data-testid="digit-8"]').trigger('click');
    await wrapper.find('[data-testid="operation-divide"]').trigger('click');
    await wrapper.find('[data-testid="digit-2"]').trigger('click');
    await wrapper.find('[data-testid="equal"]').trigger('click');

    expect(wrapper.text()).toContain('4');
  });

  it('borra la pantalla al prémer C', async () => {
    const wrapper = mount(Calculadora);
    await wrapper.find('[data-testid="digit-7"]').trigger('click');
    await wrapper.find('[data-testid="clear"]').trigger('click');

    expect(wrapper.text()).toContain('0');
  });

  it('elimina un dígit al prémer DEL', async () => {
    const wrapper = mount(Calculadora);
    await wrapper.find('[data-testid="digit-5"]').trigger('click');
    await wrapper.find('[data-testid="digit-3"]').trigger('click');
    await wrapper.find('[data-testid="digit-4"]').trigger('click');
    await wrapper.find('[data-testid="delete"]').trigger('click');

    expect(wrapper.text()).toContain('53');
  });

  it('canvia el signe de un número', async () => {
    const wrapper = mount(Calculadora);
    await wrapper.find('[data-testid="digit-5"]').trigger('click');
    await wrapper.find('[data-testid="toggle-sign"]').trigger('click');

    expect(wrapper.text()).toContain('-5');
  });

  it('realitza la operació de residu', async () => {
    const wrapper = mount(Calculadora);
    await wrapper.find('[data-testid="digit-8"]').trigger('click');
    await wrapper.find('[data-testid="operation-percent"]').trigger('click');
    await wrapper.find('[data-testid="digit-2"]').trigger('click');
    await wrapper.find('[data-testid="equal"]').trigger('click');

    expect(wrapper.text()).toContain('0');
  });

  it('realitza la operació de 1/x', async () => {
    const wrapper = mount(Calculadora);
    await wrapper.find('[data-testid="digit-5"]').trigger('click');
    await wrapper.find('[data-testid="operation-inverse"]').trigger('click');
    await wrapper.find('[data-testid="equal"]').trigger('click');

    expect(wrapper.text()).toContain('0.2');
  });

  it('realitza la operació de quadrat x²', async () => {
    const wrapper = mount(Calculadora);
    await wrapper.find('[data-testid="digit-4"]').trigger('click');
    await wrapper.find('[data-testid="operation-squared"]').trigger('click');
    await wrapper.find('[data-testid="equal"]').trigger('click');

    expect(wrapper.text()).toContain('16');
  });

  it('realitza la operació de arrel quadrada √x', async () => {
    const wrapper = mount(Calculadora);
    await wrapper.find('[data-testid="digit-9"]').trigger('click');
    await wrapper.find('[data-testid="operation-sqrt"]').trigger('click');
    await wrapper.find('[data-testid="equal"]').trigger('click');

    expect(wrapper.text()).toContain('3');
  });

  it('Operació amb decimals', async () => {
    const wrapper = mount(Calculadora);
    await wrapper.find('[data-testid="digit-5"]').trigger('click');
    await wrapper.find('[data-testid="decimal"]').trigger('click');
    await wrapper.find('[data-testid="digit-3"]').trigger('click');
    await wrapper.find('[data-testid="operation-add"]').trigger('click');
    await wrapper.find('[data-testid="digit-2"]').trigger('click');
    await wrapper.find('[data-testid="decimal"]').trigger('click');
    await wrapper.find('[data-testid="digit-7"]').trigger('click');
    await wrapper.find('[data-testid="equal"]').trigger('click');

    expect(wrapper.text()).toContain('8');
  });

  it('Operació combinada', async () => {
    const wrapper = mount(Calculadora);
    await wrapper.find('[data-testid="digit-5"]').trigger('click');
    await wrapper.find('[data-testid="operation-add"]').trigger('click');
    await wrapper.find('[data-testid="digit-3"]').trigger('click');
    await wrapper.find('[data-testid="operation-multiply"]').trigger('click');
    await wrapper.find('[data-testid="digit-2"]').trigger('click');
    await wrapper.find('[data-testid="equal"]').trigger('click');

    expect(wrapper.text()).toContain('11');
  });
});
