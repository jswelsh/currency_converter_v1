
export default function reducer(state, action) {
  const DEFAULT = {
    expression: '',
    display: '0'
  }
  switch (action.type) {

    case 'NEGATION':
      if(Number.isSafeInteger(state.display)){
        if(Math.sign(state.display)<0){
          return {
            display:(Math.abs(state.display)),
            expression: `${(Math.abs(state.display))}`
          }
        } else {
          return {
            display:(Math.abs(state.display)*-1),
            expression: `${(Math.abs(state.display)*-1)}`
          }
        } 
      } else {
        return DEFAULT
      }
    case 'NUMBER_INPUT':
      if(state.expression.match(/[0-9\.]$/) && !state.expression.includes("=")){
        if(state.expression.match(/[+\-*\/]/) == null){
          let result  = eval(state.expression + action.payload);
          return {
            display: result,
            expression: `${result}`
          };
        } else {
          let result =  parseFloat(eval(state.expression + action.payload).toFixed(5))
          return {
            display: result,
            expression: state.expression + action.payload
          };
        }
      } else if(state.expression.match(/[+\-*\/]$/)){
        let result = Number.isInteger(
          eval(state.expression + action.payload)) ? 
          eval(state.expression+action.payload) : 
          parseFloat(
            eval(state.expression+action.payload).toFixed(5));
            let expression = state.expression + action.payload;
            return {
              display: result,
              expression: expression
            };
          } else if(
            state.display === "0" && action.payload !== "0" ||
            state.expression.includes("=")) {
              console.log('helena')
              let result = eval(action.payload)
              return {
          display: result,
          expression: action.payload
        };
      }

    case 'OPERAND_INPUT':
      //replace operand if clicked consecutively
      if(state.expression.match(/[+\-*\/]$/)) {
        let expression = state.expression.slice(0, -1); 
        expression += action.payload;
        return {
          ...state,
          expression:expression
        }
      }
      if(state.expression.includes("=")) {
        let expression = state.display;
        expression += action.payload;
        return {
          ...state,
          expression: expression
        };
      } else {
        if(
          state.expression != "" && 
          state.expression.match(/[*\-\/+]$/) == null) {
          let result = Number.isInteger(
            eval(state.expression)) ?
              eval(state.expression) :
              parseFloat(eval(state.expression).toFixed(5));
          let expression = state.expression;
          expression += action.payload;
          return {
            display: result,
            expression: expression
          };
        } else if(state.expression.match(/[*\-\/+]$/) != null) {
          let result = Number.isInteger(
            eval(state.expression)) ?
              eval(state.expression) :
              parseFloat(eval(state.expression).toFixed(5));
          let expression = state.expression;
          expression = expression.substring(0, (expression.length-1));
          expression += action.payload;
          return {
            display: result,
            expression: expression
          };
        }
      }

    case 'CLEAR_INPUT':
      return DEFAULT

    case 'BACK_SPACE':
      if(state.expression.length === 0) {
        return DEFAULT
      }
      return {
        ...state,
        expression: state.expression.substring(0, (state.expression.length-1))
      };

    case 'CALCULATE_EXPRESSION':
      if(state.expression.includes("=")) {
        let expression = `${state.display}`;
        return {
          ...state,
          expression: expression
        };
      } else if(
        state.expression != "" && 
        state.expression.match(/[+\-*\/]/) != null && 
        state.expression.match(/[+\-*\/]$/) == null) {
        let result = Number.isInteger(eval(state.expression)) ? 
          eval(state.expression) : 
          parseFloat(eval(state.expression).toFixed(5));
        let expression = state.expression;
        expression += ` = ${result}`;
        return {
          display: result,
          expression: expression
        };
      } else {
        return {
          ...state
        }
      }
    }
  }
