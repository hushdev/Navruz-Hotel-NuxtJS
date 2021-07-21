<template>
  <div>
    <contacts-offer />
    <contacts-content />
  </div>
</template>

<script>
import ContactsOffer from "@/components/contacts/contactsOffer.vue";
import ContactsContent from "@/components/contacts/contactsContent.vue";

export default {
  layout: "defaultLayout",
  components: { ContactsOffer, ContactsContent },
};
</script>