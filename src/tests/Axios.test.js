import { mount } from '@vue/test-utils'; // permet muntar els components fer proves
import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import APIAxios from '@/views/APIAxios.vue';

vi.mock('axios');

describe('APIAxios.vue', () => {
    it('carrega els users correctament', async () => {
        const mockUsers = {
            users: [
                {
                    id: 1,
                    firstName: "Emily",
                    lastName: "Johnson",
                    age: 28,
                    gender: "female",
                    email: "emily.johnson@x.dummyjson.com",
                    phone: "+81 965-431-3024",
                    address: {
                        city: "Phoenix"
                    },
                    image: "https://dummyjson.com/icon/emilys/128"
                },
                {
                    id: 2,
                    firstName: "Michael",
                    lastName: "Williams",
                    age: 35,
                    gender: "male",
                    email: "michael.williams@x.dummyjson.com",
                    phone: "+49 258-627-6644",
                    address: {
                        city: "Houston"
                    },
                    image: "https://dummyjson.com/icon/michaelw/128"
                }
            ]
        };

        axios.get.mockResolvedValueOnce({ data: mockUsers });
        const wrapper = mount(APIAxios);
        await wrapper.vm.$nextTick();

        await new Promise(resolve => setTimeout(resolve, 100));

        const users = wrapper.findAll('li');
        expect(users.length).toBe(2);
        expect(users[0].text()).toContain('Emily Johnson');
        expect(users[0].text()).toContain('Email: emily.johnson@x.dummyjson.com');
        expect(users[0].text()).toContain('City: Phoenix');

        expect(users[1].text()).toContain('Michael Williams');
        expect(users[1].text()).toContain('Email: michael.williams@x.dummyjson.com');
        expect(users[1].text()).toContain('City: Houston');

        const userImages = wrapper.findAll('img');
        expect(userImages.length).toBe(2);
        expect(userImages[0].attributes('src')).toBe('https://dummyjson.com/icon/emilys/128');
        expect(userImages[1].attributes('src')).toBe('https://dummyjson.com/icon/michaelw/128');
    });
});
