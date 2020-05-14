import CheckPropTypes from "check-prop-types";

export const findByTestAtttribute = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};


export const checkProps = (component, expectedProps)=>{

  const propsErr = CheckPropTypes(component.propTypes, expectedProps, 'props', component.name)
  return propsErr;
}