import Component from '../core/component.js';

export default class Items extends Component {
  template () {
    const { filteredItems } = this.$props;
    return `
      <ul>
        ${filteredItems.map(({contents, active, seq}) => `
          <li data-seq="${seq}">
            ${contents}
            <button class="toggleBtn" style="color: ${active ? '#09F' : '#F09'}">
              ${active ? '활성' : '비활성'}
            </button>
            <button class="deleteBtn">삭제</button>
          </li>
        `).join('')}
      </ul>
    `
  }

  setEvent () {
    const { deleteItem, toggleItem } = this.$props;
    this.addEvent('keyup', '.appender', ({ key, target }) => {
      if (key !== 'Enter') return;
      const {items} = this.$state;
      const seq = Math.max(0, ...items.map(v => v.seq)) + 1;
      const contents = target.value;
      const active = false;
      this.setState({
        items: [
          ...items,
          {seq, contents, active}
        ]
      });
    });

    this.addEvent('click', '.deleteBtn', ({ target }) => {
      deleteItem(Number(target.closest('[data-seq]').dataset.seq));
    });

    this.addEvent('click', '.toggleBtn', ({ target }) => {
      toggleItem(Number(target.closest('[data-seq]').dataset.seq));
    });
  }
}