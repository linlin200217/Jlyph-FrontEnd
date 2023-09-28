import request from '@/utils/request'

enum API {
  UPLOAD_POST = '/upload',
  PRE_GENERATE_POST = '/pregenerate',
  GENERATE_POST = '/generate',
  RE_GENERATE_POST = '/regenerate',
  COLOR_POST = '/color',
  TEXTURE_POST = '/texture',
  PROCESS_POST = '/process',
  PLACEMENT_POST = '/placement',
  IMAGE_GET = '/image/', // image id needed
}

// --------- upload ---------
interface upload_request_form {
  file: File
}

interface upload_response_form {
  data_title: string
  Categorical: Array<any>
  Numerical: Array<any>
  wordcloud: any
}

// export const upload_post = (data: upload_request_form) => request.post<any, upload_response_form>(API.UPLOAD_POST, data)
export const upload_post = (data: upload_request_form) =>
  request.post<any, upload_response_form>(API.UPLOAD_POST, data, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data',
    },
  })

// --------- pregenerate ---------
interface pregenerate_request_form {
  design: string
  prompt1: string | Array<string>
  prompt2: string | null
  guide1: number
  guide2: number | null
}

interface pre_image {
  prompt: string
  image_id: string
}

interface pregenerate_response_form {
  status: string
  image: Array<pre_image>
}

export const pregenerate_post = (data: pregenerate_request_form) =>
  request.post<any, pregenerate_response_form>(API.PRE_GENERATE_POST, data)

// --------- generate ---------
interface categorical {
  column: string
  value: string
}

interface gen_image_id {
  prompt: string
  image_id: string
  shape?: string
}

interface generate_request_form {
  design: string
  Categorical1: Array<categorical>
  Categorical2: Array<categorical> | null
  prompt1: string | Array<string>
  prompt2: string | null
  guide1: number
  guide2: number | null
  image_id: Array<gen_image_id> | string
  data_title: string
}

interface gen_image {
  prompt: string
  texture?: string
  color?: string
  image_id: string
}

interface generate_response_form {
  status: string
  image: Array<gen_image>
}

export const generate_post = (data: generate_request_form) =>
  request.post<any, generate_response_form>(API.GENERATE_POST, data)

// --------- regenerate ---------
interface regenerate_request_form {
  image_id: string
  design: string
  prompt: string
  color?: string
  texture?: string
}

interface regenerate_response_form {
  image_id: string
  prompt: string
  texture?: string
  color?: string
}

export const regenerate_post = (data: regenerate_request_form) =>
  request.post<any, regenerate_response_form>(API.RE_GENERATE_POST, data)

// --------- color ---------
interface color_request_form {
  exist_color: Array<string>
}

interface color_response_form {
  color: Array<string>
}

export const color_post = (data: color_request_form) =>
  request.post<any, color_response_form>(API.COLOR_POST, data)

// --------- texture ---------
interface texture_request_form {
  exist_texture: Array<string>
}

interface texture_response_form {
  texture: Array<string>
}

export const texture_post = (data: texture_request_form) =>
  request.post<any, texture_response_form>(API.TEXTURE_POST, data)

// --------- process ---------
interface process_image {
  image_id: string
  color?: string
  color_colunm?: string
  texture?: string
  texture_colunm?: string
  shape?: string
  shape_column?: string
}

interface process_num {
  column: string
  value: string
}

interface process_request_form {
  design: string
  images: Array<process_image>
  Numerical: Array<process_num>
  process_type: number
  size_of_whole?: number
  data_title: string
}

interface process_response_form {
  status: string
  images: Array<string>
}

export const process_post = (data: process_request_form) =>
  request.post<any, process_response_form>(API.PROCESS_POST, data)

// --------- placement ---------
interface placement_image {
  data_index: number
  image_id: string
}

interface placement_request_form {
  design: string
  drawer_by: string
  images: Array<placement_image>
  method: string
  data_title: string
  border_thickness: number
  color_fill: string
  dashed: boolean
  draw_lines: boolean
  column1: string
  column2: string
  canvas_color: string
  text_size: number
  text_color: string
  grid_color: string
  show_grid: boolean
  fill_color: string
  continent_color: string
  countries_color: string
  linestyle: string
  coastlines: string
  lake_color: string
  background_type: string
  background_color: string
}

interface placement_response_form {
  status: string
  image_id: string
}

export const placement_post = (data: placement_request_form) =>
  request.post<any, placement_response_form>(API.PLACEMENT_POST, data)

// --------- image ---------
interface image_response_form {
  image: File
}

export const image_get = (image_id: string) =>
  request.post<any, image_response_form>(API.IMAGE_GET + image_id)
