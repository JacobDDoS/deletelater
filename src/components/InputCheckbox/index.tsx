import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      {/* Solution to the second bug */}
      <input
        className={classNames("RampInputCheckbox--input", {
          "RampInputCheckbox--input-checked": checked,
          "RampInputCheckbox--input-disabled": disabled,
        })}
        id={inputId}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(!checked)}
      />
    </div>
  )
}
