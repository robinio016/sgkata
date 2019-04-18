export interface Currency {
    code: string;
    name: string;
    min_confirmations: number;
    is_crypto: boolean;
    minimal_amount: number;
    is_base_of_enabled_pair: boolean;
    is_quote_of_enabled_pair: boolean;
    has_enabled_pairs: boolean;
    withdrawal_fee: number;
}
