import React from 'react';
import {Formik, Form, Field, FieldArray} from 'formik';

import style from "./ChangeInfo.module.css";



export const ChangeInfoForm = ({lookingForAJob, lookingForAJobDescription,
                                   contacts, fullName,
                                   userId, toggleEditMode,
                                   errorInfo, saveProfile,
                                   isError, aboutMe}) => {

    const submit = (values, {setSubmitting}) => {
        debugger;
        if(values.lookingForAJob==="") {
            values.lookingForAJob = lookingForAJob
        }
        saveProfile(values, userId);
        setSubmitting(false);
        toggleEditMode(false);
        if (isError) {
            toggleEditMode(true);
        }
    }

    const Fields =
        Object.keys(contacts).map(key => {
            return (
                <div className={style.fieldWrapper} key={key}>
                    <label className={style.label} htmlFor={key}>{key + ': '}</label>
                    <Field
                        type={'textarea'}
                        name={'contacts.' + key}
                    />
                </div>
            )
        })

    return (
        <div className={style.formContainer}>
            <h1 className={style.title}>Change info about yourself</h1>

            <Formik
                initialValues={
                    {
                        lookingForAJob: lookingForAJob || '',
                        lookingForAJobDescription: lookingForAJobDescription || '',
                        fullName: fullName || '',
                        aboutMe: aboutMe || '',
                        contacts: {
                            facebook: contacts.facebook || null,
                            website: contacts.website || null,
                            vk: contacts.vk || null,
                            twitter: contacts.twitter || null,
                            instagram: contacts.instagram || null,
                            youtube: contacts.youtube || null,
                            github: contacts.github || null,
                            mainLink: contacts.mainLink || null
                        }
                    }
                }
                onSubmit={submit}
            >
                {({ isSubmitting, values}) => (
                    <Form className={style.form}>
                        <div className={style.checkboxWrapper }>
                            <label className={style.label} htmlFor={'lookingForAJob'}>Looking for a job: </label>
                            <Field
                                type={'checkbox'}
                                name={'lookingForAJob'}
                            />
                        </div>

                        { values.lookingForAJob ?
                            <div className={style.fieldWrapper}>
                                <label className={style.label} htmlFor={'lookingForAJobDescription'}>Description: </label>
                                <Field
                                    type={'textarea'}
                                    name={'lookingForAJobDescription'}
                                />
                            </div>
                             : null
                        }
                        <div className={style.fieldWrapper}>
                            <label className={style.label} htmlFor={'fullName'}>Full name: </label>
                            <Field
                                type={'textarea'}
                                name={'fullName'}
                            />
                        </div>
                        <div className={style.fieldWrapper}>
                            <label className={style.label} htmlFor={'aboutMe'}>About me: </label>
                            <Field
                                type={'textarea'}
                                name={'aboutMe'}
                            />
                        </div>
                        <h2 className={style.contacts}>Contacts: </h2>
                        <FieldArray
                            name={contacts}
                            render={arrayHelpers => (
                                Fields
                            )}
                        />
                        <button className={style.save} type="submit" disabled={isSubmitting}>
                            Save
                        </button>
                        <button className={style.save} type="cancel" disabled={isSubmitting} onClick={()=>toggleEditMode(false)}>
                            Cancel
                        </button>

                    </Form>
                )}
            </Formik>
            {
                errorInfo ?
                    <p className={style.error_login}>Error: {errorInfo}</p> :
                    null
            }
        </div>
    )
}
