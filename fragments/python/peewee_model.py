# coding:utf8
# 生成 peewee model
# python table_model.py -t t_examinfo YinzhuoExamInfo

import re
import subprocess
import sys

text = """
class {table_name_camel_case}(Model):
{fields}
    class Meta:
        database = yinzhuo_db
        table_name = '{table_name}'
"""


def _field_type(r):
    if 'int' in r:
        return 'IntegerField'
    if 'decimal' in r:
        return 'DecimalField'
    return 'CharField'


def camel_case_to_snake_case_convert(name):
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', s1).lower()


def get_fields(names, types):
    txt = "{camel_case_name} = {camel_case_type}(column_name='{field_name}')"
    res = []
    for i, n in enumerate(names):
        t = types[i]
        res.append(txt.format(camel_case_name=camel_case_to_snake_case_convert(n), camel_case_type=t, field_name=n))
    return res


def main():
    table_name = sys.argv[1]
    table_name_camel_case = sys.argv[2]  # 类名
    string = subprocess.run(
        ['mysql', '-uroot', '-proot', '-h127.0.0.1', 'master', '-e', f'show create table {table_name}\G'],
        stdout=subprocess.PIPE).stdout.decode('utf-8')
    print(string)
    res = re.findall(r'`\w+`', string)
    res = res[1:]
    res = [r[1:-1] for r in res]
    seen = set()
    field_names = [x for x in res if x not in seen and not seen.add(x)]
    print(field_names)

    res = re.findall(r'` [\w,\(\)]+ ', string)
    field_types = [_field_type(r) for r in res]
    print(field_types)

    print(len(field_names), len(field_types))
    assert (len(field_names) == len(field_types))

    fields = get_fields(field_names, field_types)
    fields_string = ''.join(list(map(lambda x: '    ' + x + '\n', fields)))

    print(text.format(table_name_camel_case=table_name_camel_case, fields=fields_string, table_name=table_name))


if __name__ == '__main__':
    main()