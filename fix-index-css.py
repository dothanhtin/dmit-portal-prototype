#!/usr/bin/env python3
"""
Script để sửa lỗi CSS conflict markers trong index.html
"""

def fix_index_html():
    # Đọc file
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Tìm và xóa conflict markers và code duplicate
    lines = content.split('\n')
    cleaned_lines = []
    skip_until_next_marker = False
    
    for i, line in enumerate(lines):
        # Nếu gặp dòng =======
        if line.strip() == '=======':
            # Bỏ qua dòng này và các dòng duplicate sau nó
            # Tìm dòng } kết thúc block duplicate
            skip_until_next_marker = True
            continue
        
        # Nếu đang skip và gặp dòng kết thúc block
        if skip_until_next_marker:
            # Tìm dòng } để kết thúc skip
            if line.strip() == '}' and i > 1280:
                skip_until_next_marker = False
            continue
        
        cleaned_lines.append(line)
    
    # Ghi lại file
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write('\n'.join(cleaned_lines))
    
    print('✅ Đã sửa lỗi CSS trong index.html')
    print(f'📊 Xóa {len(lines) - len(cleaned_lines)} dòng duplicate')

if __name__ == '__main__':
    try:
        fix_index_html()
    except Exception as e:
        print(f'❌ Lỗi: {e}')
        print('💡 Khuyến nghị: Sử dụng index-tooltip-demo.html thay thế')
