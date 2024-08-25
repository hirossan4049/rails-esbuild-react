module ApplicationHelper
  def react_component(file, props = nil)
    puts file
    puts props
    puts props.to_json

    # infoPath = javascript_path file
    # appath = javascript_path "application"
    # "<script type='module' id='setup_script'>import {react_component} from '#{appath}';react_component('#{infoPath}', #{props.to_json})</script>".html_safe
    # "<script type='module' id='setup_script'>
    # import React from 'react';
    # import { createRoot } from 'react-dom/client';
    # import View from '#{infoPath}';
    # ReactDOM.render(React.createElement(View), document.getElementById('root'));
    # </script>".html_safe
    "<div id='data' file='#{file}' props='#{props.to_json}' />".html_safe
  end
end
