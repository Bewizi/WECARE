import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { createRouter, createMemoryHistory } from 'vue-router'

import AppLink from '@/components/AppLink.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
  ],
})

describe('AppLink', () => {
  beforeEach(async () => {
    router.push('/')
    await router.isReady()
  })
  it('renders the RouterLink with the correct "to" props', () => {
    const wrapper = mount(AppLink, {
      props: { to: '/' },
      global: {
        plugins: [router],
      },
    })
    const routerLink = wrapper.findComponent({ name: 'RouterLink' })
    expect(routerLink.props('to')).toBe('/')
  })

  it('renders slot content', () => {
    const wrapper = mount(AppLink, {
      props: { to: '/' },
      slots: { default: 'Click Me' },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.text()).toBe('Click Me')
  })

  it('applies the provided className', () => {
    const wrapper = mount(AppLink, {
      props: { to: '/', className: 'custom-class' },
      global: {
        plugins: [router],
      },
    })
    const routerLink = wrapper.findComponent({ name: 'RouterLink' })
    expect(routerLink.classes()).toContain('custom-class')
  })
})
