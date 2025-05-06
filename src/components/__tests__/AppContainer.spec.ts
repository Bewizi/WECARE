import { describe, expect, it } from 'vitest'
import AppContainer from '../AppContainer.vue'
import { mount } from '@vue/test-utils'

describe('AppContainer', () => {
  it('applies the correct CSS classes', () => {
    const wrapper = mount(AppContainer)
    expect(wrapper.classes()).toContain('max-w-7xl')
    expect(wrapper.classes()).toContain('mx-auto')
    expect(wrapper.classes()).toContain('px-5')
  })

  it('renders with no slot content', () => {
    const wrapper = mount(AppContainer)
    expect(wrapper.text()).toContain('')
  })

  it('renders multiple slot elements', () => {
    const wrapper = mount(AppContainer, { slots: { default: '<p>First</p><p>Second</p>' } })
    expect(wrapper.html()).toContain('<p>First</p>')
    expect(wrapper.html()).toContain('<p>Second</p>')
  })
})
