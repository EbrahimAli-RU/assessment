import React from 'react'

const SwitchButton = () => {
  return (
    <>
        <div class="button-switch">
            <input type="checkbox" id="switch-orange" class="switch" />
            <label for="switch-orange" class="lbl-off">Off</label>
            <label for="switch-orange" class="lbl-on">On</label>
        </div>

        {/* <div class="button-switch">
            <input type="checkbox" id="switch-blue" class="switch" checked />
            <label for="switch-blue" class="lbl-off">Off</label>
            <label for="switch-blue" class="lbl-on">On</label>
        </div> */}
    </>
  )
}

export default SwitchButton