/* jshint -W117 */
'use strict';

var React = require('react');
var Tabs = require('./components/Tabs');

var App = React.createClass({
  onBeforeChange: function(selectedIndex, $selectedPanel, $selectedTabMenu) {
    // console.log('before the tab ' + selectedIndex);
  },
  onAfterChange: function(selectedIndex, $selectedPanel, $selectedTabMenu) {
    // console.log('after the tab ' + selectedIndex);
  },
  render: function() {
    return (
      <Tabs
        tabActive={2}
        onBeforeChange={this.onBeforeChange}
        onAfterChange={this.onAfterChange}>
        <Tabs.Panel title='Tab #1'>
          <h2>Content #1</h2>
        </Tabs.Panel>
        <Tabs.Panel title='Tab #2'>
          <h2>Content #2</h2>
        </Tabs.Panel>
        <Tabs.Panel title='Tab #3'>
          <h2>Content #3</h2>
        </Tabs.Panel>
      </Tabs>
    );
  }
});

React.renderComponent(
	<App />,
	document.getElementById('tabs')
);
