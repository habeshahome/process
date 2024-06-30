/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, FormControl, FormLabel, Input, Stack } from "@mui/material"
import axios from "axios"
import { enqueueSnackbar } from "notistack"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export interface inputFieldsInterface {
    nationalID: string,
    firstName: string,
    middleName: string,
    lastName: string,
    nationality: string,
    countryOfResidence: string,
    segment: string,
    subSegment: string,
    businessOwner: string,
    vipIndicator: string,
    registeredPhoneNumber: string,
    registeredEmailAddress: string,
    passportNumber: string,
    natureOfBusiness: string,
    employmentStatus: string,
    nationalIdExpiry: string,
    sentToChecker: string
}
interface CheckerFormProps {
    payload: any
    readonly?: boolean
}
export const CheckerForm = (props: CheckerFormProps) => {
    const { readonly, payload } = props
    const [inputFields, setInputFields] = useState({})

    const id = useParams()
    const navigate = useNavigate()


    const submit = async (e: React.FormEvent) => {
        e.preventDefault()
        await axios
            .post(`http://localhost:3000/tasks/${id}`, {
                headers: {
                    'Content-Type': `multipart/form-data`,
                },
                data: {
                    id: id,
                    sentToChecker: true,
                    ...inputFields
                }
            }
            )
            .then(response => {
                console.log(response)
                enqueueSnackbar('Notify')
                navigate('/checker')
            })
            .catch(err => {
                enqueueSnackbar('Notify')
                navigate('/checker')
            })
    }
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e.target.value)
        setInputFields((prev: any) =>
            [...prev]
        )
    }

    return (
        <>
            {/* {
                JSON.stringify(payload)
            } */}
            <form onSubmit={submit}>
                <Box display='grid' gridTemplateColumns="repeat(4, 1fr)" gap={3}>
                    <FormControl>
                        <FormLabel> National ID</FormLabel>
                        <Input onChange={(e) => handleOnChange(e)} name={"nationalId"} value={payload.nationalId} readOnly={readonly} />
                    </FormControl>

                    <FormControl>
                        <FormLabel> firstName</FormLabel>
                        <Input onChange={(e) => handleOnChange(e)} name={"firstName"} value={payload.firstName} readOnly={readonly} />
                    </FormControl>

                    <FormControl>
                        <FormLabel> middleName</FormLabel>
                        <Input onChange={(e) => handleOnChange(e)} name={"middleName"} value={payload.middleName} readOnly={readonly} />
                    </FormControl>

                    <FormControl>
                        <FormLabel> lastName</FormLabel>
                        <Input onChange={(e) => handleOnChange(e)} name={"lastName"} value={payload.lastName} readOnly={readonly} />
                    </FormControl>

                    <FormControl>
                        <FormLabel> nationality</FormLabel>
                        <Input onChange={(e) => handleOnChange(e)} name={"nationality"} value={payload.nationality} readOnly={readonly} />
                    </FormControl>

                    <FormControl>
                        <FormLabel> countryOfResidence</FormLabel>
                        <Input onChange={(e) => handleOnChange(e)} name={"countryOfResidence"} value={payload.countryOfResidence} readOnly={readonly} />
                    </FormControl>

                    <FormControl>
                        <FormLabel> segment</FormLabel>
                        <Input onChange={(e) => handleOnChange(e)} name={"segment"} value={payload.segment} readOnly={readonly} />
                    </FormControl>

                    <FormControl>
                        <FormLabel> subSegment</FormLabel>
                        <Input onChange={(e) => handleOnChange(e)} name={"subSegment"} value={payload.subSegment} readOnly={readonly} />
                    </FormControl>

                    <FormControl>
                        <FormLabel> businessOwner</FormLabel>
                        <Input onChange={(e) => handleOnChange(e)} name={"businessOwner"} value={payload.businessOwner} readOnly={readonly} />
                    </FormControl>

                    <FormControl>
                        <FormLabel> vipIndicator</FormLabel>
                        <Input onChange={(e) => handleOnChange(e)} name={"vipIndicator"} value={payload.vipIndicator} readOnly={readonly} />
                    </FormControl>

                    <FormControl>
                        <FormLabel> registeredPhoneNumber</FormLabel>
                        <Input onChange={(e) => handleOnChange(e)} name={"registeredPhoneNumber"} value={payload.registeredPhoneNumber} readOnly={readonly} />
                    </FormControl>

                    <FormControl>
                        <FormLabel> registeredEmailAddress</FormLabel>
                        <Input onChange={(e) => handleOnChange(e)} name={"registeredEmailAddress"} value={payload.registeredEmailAddress} readOnly={readonly} />
                    </FormControl>

                    <FormControl>
                        <FormLabel> passportNumber</FormLabel>
                        <Input onChange={(e) => handleOnChange(e)} name={"passportNumber"} value={payload.passportNumber} readOnly={readonly} />
                    </FormControl>

                    <FormControl>
                        <FormLabel> natureOfBusiness</FormLabel>
                        <Input onChange={(e) => handleOnChange(e)} name={"natureOfBusiness"} value={payload.natureOfBusiness} readOnly={readonly} />
                    </FormControl>

                    <FormControl>
                        <FormLabel> employmentStatus</FormLabel>
                        <Input onChange={(e) => handleOnChange(e)} name={"employmentStatus"} value={payload.employmentStatus} readOnly={readonly} />
                    </FormControl>

                    <FormControl>
                        <FormLabel> nationalIdExpiry</FormLabel>
                        <Input onChange={(e) => handleOnChange(e)} name={"nationalIdExpiry"} value={payload.nationalIdExpiry} readOnly={readonly} />
                    </FormControl>
                </Box>

                <Stack direction='row' gap={3} justifyContent='space-between' sx={{ width: '50vw', ml: 'auto', my: '64px' }}>
                    <Button onClick={submit} size='large' variant='contained' color='primary'> Approve </Button>
                    <Button onClick={submit} size='large' variant='contained' color='error'> Reject </Button>
                    <Button onClick={submit} size='large' variant='outlined'> Return to Maker </Button>
                </Stack>
            </form >
        </>
    )
}

