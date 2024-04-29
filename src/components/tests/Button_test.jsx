import React from "react"
import my_button from "../components/my_button"
import { renderer } from "react-test-renderer"

test('my_button has onPress', () => {
    let x = 0
    const instance = renderer
        .create(<my_button onPress={() => x++}/>)
        .getInstance()
    expect(instance.handlePress).toBeDefined()
    expect(x).toBe(0)
    instance.props.handlePress()
    expect(x).toBe(1)   
})