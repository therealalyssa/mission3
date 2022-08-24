import StringFormat from "./StringFormat"

describe("String format test",()=>{
  it("when \"hello%world\", return hello world", ()=>{
    const input = 'hello%world';
    const expected = 'hello world';

    const actual: string = StringFormat(input); 
    expect(actual).toBe(expected);
  })
  it("when \"!hello world\", return hello world", ()=>{
    const input = '!hello world';
    const expected = 'hello world';

    const actual: string = StringFormat(input); 
    expect(actual).toBe(expected);
  })
  it("when \";hello?world!\", return hello world", ()=>{
    const input = ';hello?world!';
    const expected = 'hello world';

    const actual: string = StringFormat(input); 
    expect(actual).toBe(expected);
  })
  it("when \"hello;world\", return hello world", ()=>{
    const input = 'hello;world';
    const expected = 'hello world';

    const actual: string = StringFormat(input); 
    expect(actual).toBe(expected);
  })
  it("when \"hello world?\", return hello world", ()=>{
    const input = 'hello world?';
    const expected = 'hello world';

    const actual: string = StringFormat(input); 
    expect(actual).toBe(expected);
  })
})