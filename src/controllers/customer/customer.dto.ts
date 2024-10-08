export interface Customer {
    customer_id?: number;
    customer_name?: string;
    customer_uuid?: string;
    customer_description?: string;
    customer_sla?: string;
    contact?: Contact[];
}

export interface Contact {
    contact_id?: number;
    contact_name?: string;
    contact_uuid?: string;
    contact_role?: string;
    contact_email?: string;
    contact_work_phone?: string;
    contact_mobile_phone?: string;
    contact_note?: string;
    id?: number;
}
