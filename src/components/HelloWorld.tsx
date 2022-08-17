import { ReactNode } from "react"

function HelloWorld(props: { children: ReactNode, className: string }) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default HelloWorld