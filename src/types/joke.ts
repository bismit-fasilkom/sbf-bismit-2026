/**
 * Tipe data respon untuk endpoint publik jokes-bapack2-api
 * Endpoint: https://jokes-bapack2-api.yuana.id/v1/text/random
 */
export interface JokeResponse {
  code: number;
  msg: string;
  data: string;
}
