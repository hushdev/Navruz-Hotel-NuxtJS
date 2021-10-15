<template>
  <div>
    <contacts-offer />
    <contacts-content />
  </div>
</template>

<script>
import ContactsOffer from "@/components/contacts/contactsOffer";
import ContactsContent from "@/components/contacts/contactsContent";

export default {
  layout: "defaultLayout",
  components: { ContactsOffer, ContactsContent },
};
</script>