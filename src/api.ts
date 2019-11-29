import { Item } from "./db"

/**
 * Create an item in the database.
 * @param item the item to be created in database
 */
export function createItem(item: Item) {
  var now = Date.now()
  var keys = Object.keys(item)
  var sql = /* sql */ `
    insert into item() values ()
  `
}


export function createBucket(user: string, name: string, description: string) {

}



export function listBuckets(user: string): Item[] {
  // check if user is admin, in which case he is added as a join.
  return []
}


/**
 * Recursively delete all files and all folders pertaining to this object id
 * from the database *and* the file system.
 * @param item_id The folder id
 */
export function deleteItems(item_id: number) {
  // first recursively list all the Items
  // delete them from the database
  // delete them from the disk
}

export function touchItem(item_id: number, modified: boolean = false) {
  // Increment view list and set atime
  const now = Date.now()
  const sql = /* sql */ `
    update Item
      set
        atime = ${now},
        ${modified ? 'mtime = ${now}' : ''}
        access_nb = access_nb + 1
    where id = ${item_id}
  `
  // check the row count to make sure something was actually updated.
  // throw an Error if it wasn't
}

/**
 * List folders and files pertaining to this folder.
 * This is recursive.
 * @param parent_id the parent id
 */
export function listItems(parent_id: number) {
  touchItem(parent_id)
  const sql = /* sql */ `
    select * from Item where parent_id = ${parent_id}
      order by type, name
  `
}


/**
 * Rename an item.
 * @param item_id the id of the item
 * @param name the new name
 */
export function renameItem(item_id: number, name: string) {

}


/**
 * Describe an item
 * @param item_id the id
 * @param desc the new description
 */
export function describeItem(item_id: number, desc: string) {

}


/**
 * Move several items to another parent
 * @param item_ids the items that will be moved
 * @param to the new parent_id
 */
export function moveItems(item_ids: number[], to: number) {
  // touchItem(item_id, true)
}


/**
 * Get an item
 * @param item_id the item id
 */
export function getItem(item_id: number): Item {

}

/**
 * Download a file
 * @param item_id the item_id this file pertains to
 */
export function downloadFile(item_id: number) {
  // send the header to nginx so that it handles itself the download
  // X-Accel-Redirect : /protected/<uuid>
  // Content-Type : le mimetype ?
  // Content-Disposition : attachment; filename=name
  // Content-Length : <number> // le file size
}

export function uploadFile() {

}