import { useField } from 'formik'
import { HStack, FaLock, Input } from "@chakra-ui/react"
import { AiFillWarning } from "react-icons/ai"

export default function MyInputField(props){

    const [field, meta] = useField(props)

    return <HStack p={3}>
        <FaLock color="#7d7d7d" />
        <Input variant="unstyled" borderRadius="none"  {...props} {...field} />
        {meta.touched && meta.error ? <div>meta.error</div> : null}
    </HStack>
}