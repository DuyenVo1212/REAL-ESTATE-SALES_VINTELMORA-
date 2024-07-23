import './Input.scss';

const Input = {
  Text({ prettier, column = false, name, label, messages, ...inputProps }) {
    return (
      <div className={`form--group ${column && 'form--column'}`}>
        <label htmlFor={name} className='form--label'>
          {label}
        </label>
        <div className='form--input-group'>
          <input className='form--control' {...inputProps} id={name} name={name} />
          <div className='form--error'>{messages}</div>
        </div>
      </div>
    );
  },

  Select({ prettier, label, name, options, messages, value, ...inputProps }) {
    return (
      <div className='form--group'>
        <label htmlFor={name} className='form--label'>
          {label}
        </label>
        <div className='form--input-group'>
          <select className='form--select' id={name} name={name} {...inputProps} defaultValue={value}>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.value}
              </option>
            ))}
          </select>
          <div className='form--error'>{messages}</div>
        </div>
      </div>
    );
  },

  Check({ prettier, label, options, messages, onCheck, ...inputProps }) {
    return (
      <div className='form--group'>
        <label className='form--label'>{label}</label>

        <div className='form--input-group'>
          <div className=''>
            {options.map((option) => {
              let isChecked = onCheck(inputProps.type, option.id);
              return (
                <div className='form--check' key={option.id}>
                  <input
                    className='form--check-input'
                    id={option.id}
                    value={option.id}
                    checked={isChecked}
                    {...inputProps}
                  />
                  <label className='form--check--label' htmlFor={option.id}>
                    {option.value}
                  </label>
                </div>
              );
            })}
          </div>
          <div className='form--error'>{messages}</div>
        </div>
      </div>
    );
  },

  TextArea({ prettier, label, name, messages, ...inputProps }) {
    return (
      <div className='form--group'>
        <label htmlFor={name} className='form--label'>
          {label}
        </label>
        <div className='form--input-group'>
          <textarea className='form--control' id={name} name={name} {...inputProps}></textarea>

          <div className='form--error'>{messages}</div>
        </div>
      </div>
    );
  },
};

export default Input;
