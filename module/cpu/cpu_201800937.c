#include <linux/module.h>
#include <linux/kernel.h>   /*para usar KERN_INFO*/
#include <linux/init.h>     /* Header para los macros module_init y module_exit */
#include <linux/proc_fs.h>  /* Header necesario porque se usara proc_fs */
#include <asm/uaccess.h>    /* for copy_from_user */
#include <linux/seq_file.h> /* Header para usar la lib seq_file y manejar el archivo en /proc*/

/* libreria de memoria ram*/
#include <linux/hugetlb.h>

#include <linux/sched.h>

MODULE_LICENSE("GPL");
MODULE_DESCRIPTION("Práctica 2, Laboratorio Sistemas Operativos 1 - Sección N ");
MODULE_AUTHOR("José Abraham Solórzano Herrera");

struct task_struct * cpu;
struct task_struct * child;
struct list_head * lstProcess;

/* Función que muestra el contenido del comando CAT */
static int write_file(struct seq_file *archivo, void *v)
{   

    for_each_process(cpu){
        seq_printf(archivo, "%d", cpu->pid);
        seq_printf(archivo, " --------> ");
        seq_printf(archivo, "%s", cpu->comm);
        seq_printf(archivo, "\n");
        list_for_each(lstProcess, &(cpu->children)){
            child = list_entry(lstProcess, struct task_struct, sibling);
            seq_printf(archivo, "   ");
            seq_printf(archivo, "%d", child->pid);
            seq_printf(archivo, " --------> ");
            seq_printf(archivo, "%s", child->comm);
            seq_printf(archivo, "\n");
        }
    }
    return 0;
}

/* Está función se encarga de ejecutarse cada ver que se lea el archivo con el comando CAT */
static int al_abrir(struct inode *inode, struct file *file)
{
    return single_open(file, write_file, NULL);
}

/* Si el kernel es 5.6 o mayor se usa la estructura proc_ops */
static struct proc_ops operaciones =
{
    .proc_open = al_abrir,
    .proc_read = seq_read
};

/* Está función ejecuta al insertar el módulo en el kernel con el comando insmod */
static int _insert(void)
{
    proc_create("cpu_201800937", 0, NULL, &operaciones);
    printk(KERN_INFO "José Abraham Solórzano Herrera\n");
    return 0;
}

/* Está Función se ejecuta al remover el modulo del kernel con el comadno rmmod */
static void _remove(void)
{
    remove_proc_entry("cpu_201800937", NULL);
    printk(KERN_INFO "Segundo Semestre 2022\n");
}

module_init(_insert);
module_exit(_remove);