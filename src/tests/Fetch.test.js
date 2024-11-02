import { mount } from '@vue/test-utils';
import { it, expect, beforeEach, vi } from 'vitest';
import APIFetch from '@/views/APIFetch.vue';

// Mock de fetch
global.fetch = vi.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([
            {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            },
            {
                "postId": 1,
                "id": 2,
                "name": "quo vero reiciendis velit similique earum",
                "email": "Jayne_Kuhic@sydney.com",
                "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
            },
        ])
    })
);

// Neteja del mock abans de cada test
beforeEach(() => {
    fetch.mockClear();
});

it('carrega els comments correctament', async () => {
    const wrapper = mount(APIFetch);
    await wrapper.vm.$nextTick();

    await new Promise(resolve => setTimeout(resolve, 100)); // Espera per simular la càrrega

    const comments = wrapper.findAll('li');
    expect(comments.length).toBe(2); // Comprova que hi ha dos comentaris

    // Comprova el contingut del primer comentari
    expect(comments[0].text()).toContain('id labore ex et quam laborum');
    expect(comments[0].text()).toContain('Eliseo@gardner.biz');
    expect(comments[0].text()).toContain('laudantium enim quasi est quidem magnam voluptate ipsam eos');

    // Comprova el contingut del segon comentari
    expect(comments[1].text()).toContain('quo vero reiciendis velit similique earum');
    expect(comments[1].text()).toContain('Jayne_Kuhic@sydney.com');
    expect(comments[1].text()).toContain('est natus enim nihil est dolore omnis voluptatem numquam');
});
