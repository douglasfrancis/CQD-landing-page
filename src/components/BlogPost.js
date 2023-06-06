import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogPost() {
  var parser = new DOMParser()
  let string = "<div><h1>Care Quality Digital: The Home Care Management App That Makes Life Easier</h1><br/><br/><p>Caring for an elderly or disabled loved one can be a challenge. It can be difficult to keep track of appointments, medications, and other important details. And it can be even harder to find the time to do everything that needs to be done.</p><br/><br/><p>That's where Care Quality Digital comes in. Care Quality Digital is a home care management app that makes it easy to stay organized and on top of things. With Care Quality Digital, you can:</p><br/><br/><ul><li><b>Track appointments and medications.</b> Care Quality Digital has a built-in calendar and medication reminder system. This will help you make sure that your loved one never misses an appointment or forgets to take their medication.</li><li><b>Create a care plan.</b> Care Quality Digital makes it easy to create a customized care plan for your loved one. This plan can include information about their needs, preferences, and medical history.</li><li><b>Communicate with caregivers</b> Care Quality Digital makes it easy to communicate with your loved one's caregivers. You can send messages, upload photos, and even make video calls.</li><li><b>Get help from experts.</b>  Care Quality Digital has a team of experts who can provide you with support and advice. They can help you with everything from finding a caregiver to managing your loved one's finances.</li></ul><br/><br/><p>Care Quality Digital is the perfect solution for anyone who is caring for an elderly or disabled loved one. It's easy to use, affordable, and packed with features that will make your life easier.</p><br/><br/><b>Sign up for Care Quality Digital today and start enjoying the peace of mind that comes with knowing that your loved one is in good hands.</b> </div>"

  var node = parser.parseFromString(string, "text/html");
  const {id} = useParams()
  return (
    <div>{node}</div>
  )
}
