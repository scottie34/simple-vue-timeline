import { createLocalVue, mount, Wrapper, WrapperArray } from '@vue/test-utils';
import SimpleTimelineItem from '@/components/SimpleTimelineItem.vue';
import { Item } from '@/components/simple-timeline-item.model';
import { Status } from '@/components/simple-timeline-status.model';
import { Control } from '@/components/simple-timeline-control.model';
import Vue, { VueConstructor } from 'vue';
import { SimpleTimelinePlugin } from '@/main';
import { BadgePlugin, ButtonPlugin, CardPlugin, LayoutPlugin } from "bootstrap-vue";

const localVue: VueConstructor<Vue> = createLocalVue();
// bootstrap
Vue.use(BadgePlugin);
Vue.use(ButtonPlugin);
Vue.use(CardPlugin);
Vue.use(LayoutPlugin);

localVue.use(SimpleTimelinePlugin);

describe('SimpleTimelineItem.vue', () => {
  it('renders passed props', () => {
    const title = 'Event Title';
    const body = 'Here is the body message of item 0';
    const controls = [new Control('edit', 'pencil-alt'), new Control('copy', 'plus')];
    const itemIcon = 'calendar-alt';

    const wrapper = mount(SimpleTimelineItem, {
      localVue,
      propsData: {
        item: new Item(0, itemIcon, Status.DANGER, title, controls, new Date(2020, 10, 8), body),
        dateFormat: 'YY/MM/DD'
      },
      stubs: {
        FontAwesomeIcon: true
      }
    });
    verifyIcon(wrapper.get('.timeline-icon'), itemIcon);
    expect(wrapper.get('.text-muted').text()).toBe('20/11/08');
    expect(wrapper.get('.card-header').text()).toBe(title);
    expect(wrapper.get('.card-body').text()).toBe(body);

    let wrapperArray: WrapperArray<any> = wrapper.get('.card-footer').findAll('button');
    expect(wrapperArray.length).toBe(controls.length);
    controls.forEach((control, index) => {
      verifyIcon(wrapperArray.at(index), control.icon);
    });
  });
});

function verifyIcon(wrapper: Wrapper<Vue>, icon: string) {
  expect(wrapper.get('fontawesomeicon-stub').attributes('icon')).toBe(icon);
}
