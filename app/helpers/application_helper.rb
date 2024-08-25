module ApplicationHelper
  def react_component(file, props = nil)
    "<div id='data' file='#{file}' props='#{props.to_json}' />".html_safe
  end
end
