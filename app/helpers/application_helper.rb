module ApplicationHelper
  def react_component(file, props = nil)
    puts file
    puts props
    puts props.to_json

    infoPath = javascript_path file
    appath = javascript_path "application"
    "<script type='module'>import {react_component} from '#{appath}';react_component('#{infoPath}', #{props.to_json})</script>".html_safe
  end
end
