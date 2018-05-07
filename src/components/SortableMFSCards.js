import React from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import CardMFS from './CardMFS';

const SortableItem = SortableElement(({value}) =>
{return <CardMFS key={value.cardId} {...value}/>}
);

const SortableList = SortableContainer(({items}) => {
  return (
    <div className="ui stretched grid ev-dashboard-CardMFS__grid">
      {items.map((value, index) => (
        <SortableItem key={`item-${index}-${value.cardId}`} index={index} value={value} />
      ))}
    </div>
  );
});

export default class SortableComponent extends React.Component {
  state = {
    items: []
  };
  componentDidMount(){
    this.setState({items:this.props.MFS})
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    return <SortableList axis="x" items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}
