export interface Case {
    case_name?: string;
    case_description?: string;
    client_name?: string;
    case_open_date?: string;
    case_close_date?: string;
    case_soc_id?: string;
    opened_by_user_id?: number;
    opened_by?: string;
    owner_id?: number;
    owner?: string;
    case_id?: number;
    case_uuid?: string;
    classification_id?: number;
    classification?: string;
    state_id?: number;
    state_name?: string;
    access_level?: number;
}
