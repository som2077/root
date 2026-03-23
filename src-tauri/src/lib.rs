use tauri::Manager;

#[tauri::command]
fn open_overlay(app: tauri::AppHandle) {
    let overlay = tauri::WebviewWindowBuilder::new(
        &app,
        "overlay",
        tauri::WebviewUrl::App("overlay.html".into()),
    )
    .title("Interview Overlay")
    .inner_size(400.0, 600.0)
    .always_on_top(true)
    .decorations(false)
    .transparent(true)
    .resizable(false)
    .build()
    .unwrap();

    overlay.show().unwrap();
}

#[tauri::command]
fn close_overlay(app: tauri::AppHandle) {
    if let Some(window) = app.get_webview_window("overlay") {
        window.close().unwrap();
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![open_overlay, close_overlay])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}